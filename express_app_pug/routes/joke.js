var express = require('express');
var router = express.Router();
var jokes = require('../model/jokes.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('joke', {list: jokes.getRandomJoke});
});

module.exports = router;
