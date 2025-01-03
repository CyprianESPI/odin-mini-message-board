const express = require("express");
const router = express.Router();

router.get('/', (req, res) => res.send('new'));

module.exports = router;