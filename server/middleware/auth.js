const jwt = require('jsonwebtoken')
require('dotenv').config();

function auth(req, res, next) {
    const token = req.header('x-auth-token');
    if(!token) return res.status(401).send('Access Denied.No Token Provided.')

    try {
        const decoded = jwt.verify(token, process.env.WC_jwtPrivateKey);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).send('Invalid Token.')
    }
}

// const authenticateJWT = (req, res, next) => {
//     const authHeader = req.headers.authorization;

//     if (authHeader) {
//         const token = authHeader.split(' ')[1];

//         jwt.verify(token, accessTokenSecret, (err, user) => {
//             if (err) {
//                 return res.sendStatus(403);
//             }

//             req.user = user;
//             next();
//         });
//     } else {
//         res.sendStatus(401);
//     }
// };

module.exports = auth;