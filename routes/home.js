const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    }
];
const TITLE = "Mini Messageboard";

const express = require("express");
const router = express.Router();

router.get('/', (req, res) => res.render("index", {title: TITLE, messages: messages}));

module.exports = router;