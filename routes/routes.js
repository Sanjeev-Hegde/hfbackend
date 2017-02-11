var express = require('express');
var router = express.Router();

router.use('/fileservice', require("./fileservice.js"));

module.exports = router;
