const { forEach } = require('lodash');

//REGISTER ENDPOINT
const express   = require('express'),
    _           = require('lodash'),
    router      = express.Router(),
    xlstojson   = require("xls-to-json-lc"),
    xlsxtojson  = require("xlsx-to-json-lc"),
    multer      = require('multer'),
    bcrypt      = require('bcrypt'),
    sendMail    = require("../controllers/verify-mail"),
    jwt         = require('jsonwebtoken'),
    { User, validateUser, validateParams } = require('../models/user');

    var storage = multer.diskStorage({ //multers disk storage settings
        destination: function (req, file, cb) {
            cb(null, './uploads/');
        },
        filename: function (req, file, cb) {
            var datetimestamp = Date.now();
            cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1])
        }
    });

    var upload = multer({ //multer settings
                    storage: storage,
                    fileFilter : function(req, file, callback) { //file filter
                        if (['xls', 'xlsx'].indexOf(file.originalname.split('.')[file.originalname.split('.').length-1]) === -1) {
                            return callback(new Error('Wrong extension type'));
                        }
                        callback(null, true);
                    }
                }).single('file');

    // Route to upload xcel database to mongo
    router.post('/upload', function(req, res) {
        let excel2json, newUser;
        upload(req,res,function(err){
            if(err){
                 res.json({error_code:401,err_desc:err});
                 return;
            }
            if(!req.file){
                res.json({error_code:404,err_desc:"File not found!"});
                return;
            }

            if(req.file.originalname.split('.')[req.file.originalname.split('.').length-1] === 'xlsx'){
                excel2json = xlsxtojson;
            } else {
                excel2json = xlstojson;
            }

           //  code to convert excel data to json  format
            excel2json({
                input: req.file.path,  
                output: null, // output json 
                lowerCaseHeaders:true
            },async function(err, result) {
                if(err) {
                  res.json(err);
                } else {
                    const databaseObjects=[];
                    
                    await result.forEach(async user => {      
                        // console.log(user)                  

                        // Convert it to defined user model structure
                        let databaseObject = {
                            credentials: {
                                email:user.email_id || null,
                                password:user.email_id || null
                            },
                            info :{
                                first_name:user.first_name,
                                last_name:user.last_name,
                                user_role:'alumni',
                                current_post: null,
                                current_organization: null,
                            }
                        };
                        const salt = await bcrypt.genSalt(5);
                        databaseObject.credentials.password = await bcrypt.hash(databaseObject.credentials.password, salt);
                        // console.log(databaseObject)

                        // Pushing user object into the array
                        databaseObjects.push(databaseObject);

                        // Send mail to every user
                        console.log("sending mail for" + databaseObject);
                        jwt.sign(
                            {
                                user: _.pick(databaseObject, 'email'),
                            },
                            process.env.WC_jwtPrivateKey,
                            {
                                expiresIn: '1d'
                            },
                            (error, emailToken) => {
                                if(error){
                                    res.status(500).send({
                                        message: "Failed to sign jwt token"
                                    });
                                }
                                try{
                                    sendMail(databaseObject, emailToken);
                                    // res.status(202).send({
                                    //     message: "Please verify your email by clicking on the link we just mailed you"
                                    // });
                                }catch(err){
                                    console.log(err);
                                    not_sent.push(databaseObject.credentials.email);
                                }
                            }
                        );
                    });
                    console.log(databaseObjects);
                    
                    //Adding excel sheet data to database. 
                    await User.insertMany(databaseObjects);

                    const not_sent = [];

                    // await databaseObjects.forEach(object=>{
                    //     console.log("sending mail for" + object);
                    //     jwt.sign(
                    //         {
                    //             user: _.pick(object, 'id'),
                    //         },
                    //         process.env.WC_jwtPrivateKey,
                    //         {
                    //             expiresIn: '1d'
                    //         },
                    //         (error, emailToken) => {
                    //             if(error){
                    //                 res.status(500).send({
                    //                     message: "Failed to sign jwt token"
                    //                 });
                    //             }
                    //             try{
                    //                 sendMail(object, emailToken);
                    //                 res.status(202).send({
                    //                     message: "Please verify your email by clicking on the link we just mailed you"
                    //                 });
                    //             }catch(err){
                    //                 console.log(err);
                    //                 not_sent.push(object.credentials.email);
                    //             }
                    //         }
                    //     );
                    // });
                          
                    console.log("Not sent mails :-" + not_sent);
                    res.status(200).json({
                        msg : "Emails sent"
                    });
                }
            });
        });
    });
    

    router.get('/', (req, res) => {
        res.status(200).json({
            message: "Works fine bro"
        });
    }); 
    
module.exports = router;