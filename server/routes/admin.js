const router    = require('express').Router(),
    {User}      = require('../models/User'),
    bcrypt      = require('bcrypt');

// Index Route
router.get('/', (req, res) => {
    res.send('Admin Home');
});

module.exports = router;

