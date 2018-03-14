var express = require('express');
var router = express.Router();
var jokes = require('../model/jokes.js');

/* GET home page. */
router.get('/', function(req, res) {
    res.render('addjoke')
});

module.exports = router;
