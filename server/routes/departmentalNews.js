const express = require('express');
const mongoose = require('mongoose')

const { getNewss, getNews, getNewsHod, createNews, updateNews, deleteNews } = require('../controllers/departmentalNews.js');

const router = express.Router();

//routes for departmental news
//TODO auth middleware
router.get('/', getNewss);
router.get('/:id', getNews);
router.get('/hod/:creator', getNewsHod);
router.post('/', createNews);
router.patch('/:id', updateNews);
router.delete('/:id', deleteNews);

module.exports = router;