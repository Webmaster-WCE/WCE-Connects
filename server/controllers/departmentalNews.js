//Controller for departmental news
const express = require('express');
const jwt = require("jsonwebtoken");
const mongoose = require('mongoose');
const newsBody = require('../models/departmentalNews');
const sendMail = require('./newsMailer');

const secret = `${process.env.SECRETE}`;

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
    console.log(req.params);
    const {role, department } = req.params;

    try {
        const news = await newsBody.find({creatorRole: role, department: department }).sort({ _id: -1 });
        res.status(200).json(news);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

//Create a news
const createNews = async (req, res) => {
    const news = req.body;

    //authentication for department
    try {
        const token = req.headers.authorization.split(" ")[1];
        const isCustomAuth = token.length < 500;
        let decodedData;

        if (token && isCustomAuth) {
            decodedData = jwt.verify(token, secret);
            creatorRole = decodedData?.role;
            department = decodedData?.department;
        }
    } catch (error) {
        res.status(409).json({ message: error.message });
    }

    const newnewsBody = new newsBody({ 
        ...news, 
        creatorRole, 
        department, 
        createdAt: new Date().toISOString(), 
        lastUpdated: new Date().toISOString() 
    })

    try {
        await newnewsBody.save();
        console.log("Created news successfully. ID: ", newnewsBody.id);
        res.status(201).json(newnewsBody);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }

    //instantly send mail function
    /*
    try {
        req.newnewsBody = newnewsBody;
        console.log(newnewsBody);
        sendMail(req,res);
    } catch (error) {
        console.log("Send Mail Error: Error in controllers!", error);
    }
    */
}

//updateNews **updating news by hod
const updateNews = async (req, res) => {
    const { id } = req.params;
    const newsId = id;
    const { title, author, description, contactPerson, dates, contactNumber, contactEmail } = req.body;
    let loadNews;
    try {
        loadNews = await newsBody.findById(newsId);
    } catch (error) {
        console.log(error);
    }

    //authentication for department
    try {
        const token = req.headers.authorization.split(" ")[1];
        // const isCustomAuth = token.length < 500;
        let decodedData;
        if (token) {
            decodedData = jwt.verify(token, secret);
            if (decodedData?.department !== loadNews.department) {
                console.log("Decoded dept: ", decodedData?.department);
                res.status(401)
                return res.send('Invalid departmental privileges!')
            }
        }
    } catch (error) {
        return res.status(409).json({ message: error.message });
    }

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No news with id: ${id}`);

    var lastUpdated = new Date();

    const updatedNews = { title, author, description, contactPerson, dates, contactNumber, contactEmail, _id: id, lastUpdated };

    await newsBody.findByIdAndUpdate(id, updatedNews, { new: true });

    console.log("News ", newsId, " Updated!");

    res.json(updatedNews);
}

//deleteNews 
const deleteNews = async (req, res) => {
    const { id } = req.params;

    const newsId = id;
    let loadNews;
    try {
        loadNews = await newsBody.findById(newsId);
    } catch (error) {
        console.log(error);
    }

    //authentication for department
    try {
        const token = req.headers.authorization.split(" ")[1];
        // const isCustomAuth = token.length < 500;
        let decodedData;
        if (token) {
            decodedData = jwt.verify(token, secret);
            if (decodedData?.department !== loadNews.department) {
                // console.log("Decoded dept: ", decodedData?.department);
                res.status(401)
                return res.send('Invalid Departmental priviledges!')
            }
        }
    } catch (error) {
        return res.status(409).json({ message: error.message });
    }

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No news with id: ${id}`);

    await newsBody.findByIdAndRemove(id);

    res.json({ message: "News deleted successfully." });
}

module.exports = { getNewss, getNews, getNewsHod, createNews, updateNews, deleteNews };