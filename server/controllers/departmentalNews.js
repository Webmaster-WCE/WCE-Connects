//Controller for departmental news
const express = require('express');
const mongoose = require('mongoose');
const newsBody = require('../models/departmentalNews');

const router = express.Router();

// getNewss all ** pagination yet to be done
const getNewss = async (req, res) => {
    try {
        const news = await newsBody.find({}).sort({ _id: -1 })

        res.status(200).json(news);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

//getNews ** get news by a specific id
const getNews = async (req, res) => {
    const { id } = req.params;

    try {
        const news = await newsBody.findById(id);

        res.status(200).json(news);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

//getNewsHod ** get news by a specific department
const getNewsHod = async (req, res) => {
    const { creator } = req.params;

    try {
        const news = await newsBody.find({ creator: creator }).sort({ _id: -1 });
        res.status(200).json(news);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

//Create a news
const createNews = async (req, res) => {
    const news = req.body;

    const newnewsBody = new newsBody({ ...news, createdAt: new Date().toISOString() })

    try {
        await newnewsBody.save();

        res.status(201).json(newnewsBody);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

//updateNews **updating news by hod
const updateNews = async (req, res) => {
    const { id } = req.params;
    const { creator, title, description, contactPerson, dates, contactNumber, contactEmail } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No news with id: ${id}`);

    const updatedNews = { creator, title, description, contactPerson, dates, contactNumber, contactEmail, _id: id };

    await newsBody.findByIdAndUpdate(id, updatedNews, { new: true });

    res.json(updatedNews);
}

//deleteNews ** sensitive
const deleteNews = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No news with id: ${id}`);

    await newsBody.findByIdAndRemove(id);

    res.json({ message: "News deleted successfully." });
}

module.exports = { getNewss, getNews, getNewsHod, createNews, updateNews, deleteNews };