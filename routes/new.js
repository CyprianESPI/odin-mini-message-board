const messages = require("../models/db");
const express = require("express");
const router = express.Router();

router.get('/', (req, res) => res.render('form'));
router.post('/', (req, res) => {
    const body = req.body;
    const message = {text: body.message, user: body.author, date: new Date() };
    messages.push(message);
    res.render('form');
});

module.exports = router;