const jwt = require('jsonwebtoken');
require('dotenv').config();

function auth(req, res, next) {
    console.log('auth middleware ' + req.body);
    const token = req.header('x-auth-token');
    if(!token) return res.status(401).send('Access Denied.No Token Provided.');

    try {
        const decoded = jwt.verify(token, process.env.jwtPrivateKey);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).send('Invalid Token.');
    }
}

module.exports = auth;