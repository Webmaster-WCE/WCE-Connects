// const { functions } = require("lodash");
// const { use } = require("../routes");
const User = require("./../models/user");

module.exports = {
    searchName: async function(req, res, next) {
        const searchedField = req.query.name;
        const result = await User.User.find(
            { $or: 
                [
                    {"info.first_name": {$regex: searchedField,$options:'$i'}},
                    {"info.last_name": {$regex: searchedField,$options:'$i'}}
                ] 
            }
        ).select("info")
        res.send(result);
        // data.map(a => a.info);
    },
    searchRole: async function(req, res, next) {
        const searchedField = req.query.name;
        const result = await User.User.find({"info.user_role":searchedField}).select("info")
        res.send(result);
    }
}