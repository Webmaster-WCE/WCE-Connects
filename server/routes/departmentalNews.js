const express = require('express');
const mongoose = require('mongoose')

const { getNewss, getNews, getNewsHod, createNews, updateNews, deleteNews } = require('../controllers/departmentalNews.js');
const {auth, authDept, authRoleHod} = require('../middleware/auth.js');

const router = express.Router();

//routes for departmental news
//TODO auth middleware
router.get('/', getNewss);
router.get('/:id', getNews);
router.get('/:role/:department', getNewsHod);
router.post('/', auth, authRoleHod, createNews);
router.patch('/:id', auth, authRoleHod, updateNews);
router.delete('/:id', auth, authRoleHod, deleteNews);

module.exports = router;