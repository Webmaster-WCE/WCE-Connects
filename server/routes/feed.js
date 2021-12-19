const express   = require("express"),
    router      = express.Router(),
    {Feed}      = require("../models/Feed"),
    { User }    = require("../models/user");
// #### Tested: Works fine
// POST route. Create feed
router.post("/", (req, res) => {
    Feed.create(req.body.Feed, (err, createdFeed) => {
        if(err){
            return res.status(500).send({
                message: "Couldn't create database for feed"
            });
        }
        res.status(201).send(createdFeed);
    });
});
// #### Tested: Works fine
// GET route. fetch latest feeds. (Take argument from the params, filter feeds by target audience, sort by timestamp)
router.get("/all/:pageNo", async (req, res) => {
    // Get the user id from request and fetch user object
    const client    = await User.findById(req.user._id);
    if(!client) return res.status(404).send({message:"Couln't find your user object"});
    // Get the page number and objects per page 
    const pageNum   = parseInt(req.params.pageNo);
    const itemsPerPage  = parseInt(req.query.itemsPerPage);
    // Check its user type and branch (Currently branch and year not available in user model)
    // Fetch a range of feed according to pageNo 
    await Feed.find({})
    .sort({"createdAt":-1})
    .limit(itemsPerPage)
    .skip(itemsPerPage * (pageNum-1)) 
    .then((results) => {
        return res.status(200).send(results);
    }).catch((err) => {
        return res.status(500).send(err);
    })
});

// GET route. Fetch the object (Specific by author)
router.get("/author/:id", async (req, res) => {
    // Find request client object to find it's role
    const client    = await User.findById(req.user._id);
    if(!client) return res.status(404).send({message:"Couln't find your user object"});

    const query     = {
        "author":req.params.id
    };

    // if the author is client itself, return all posts else filter by target audience
    console.log("Reuest from :"+req.user._id+" for :"+req.params.id);
    if(req.user._id != req.params.id){
        query.target_audience = client.user_role;
    }
    console.log("query :"+query.author+" "+query.target_audience);
    await Feed.find({query})
    .sort({"createdAt":-1})
    .then((results) => {
        return res.status(200).send(results);
    }).catch((err) => {
        return res.status(500).send(err);
    })
});

// GET route. Fetch the object (Specific by postID)
router.get("/:postID", (req, res) => {
    Feed.findByID(req.params.postID, (err, foundFeed) => {
        if(err){
            return res.status(500).send({
                message: "Internal server error"
            });
        }
        res.status(200).send(foundFeed);
    });
});

// UPDATE route. Update the feed (Only by author)
router.put("/:postID", async (req, res) => {
    await Feed.findOneAndUpdate({_id:req.params.postID, author:req.user.id}, req.body.feed, (err, updatedFeed) => {
        if(err){
            return res.status(500).send({
                message: "Internal server error"
            });
        }
        return res.status(200).send(updatedFeed);
    });

    res.status(401).send({
        message: "You are not authorized"
    })
});

// DELETE route. Delete the feed (By author)
router.delete("/:postID", async (req, res) => {
    Feed.findOneAndDelete({_id:req.params.postID, author:req.user.id}, (err) => {
        if(err){
            return res.status(500).send({
                message: "There was an error deleting the feed"
            });
        }
        return res.status(200).send({
            message: "Successfully deleted the post." 
        });
    });

    res.status(401).send({
        message: "You are not authorized"
    })
});

module.exports = router;