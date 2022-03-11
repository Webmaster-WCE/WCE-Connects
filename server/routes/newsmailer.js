const express = require('express');

const sendMail = require('../controllers/newsMailer');
const router = express.Router();

router.post('/', sendMail);

module.exports = router;