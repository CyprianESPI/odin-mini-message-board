const messages = require("../models/db");
const TITLE = "Mini Messageboard";

const express = require("express");
const router = express.Router();

router.get('/', (req, res) => res.render("index", {title: TITLE, messages: messages}));

module.exports = router;