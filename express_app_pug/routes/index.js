var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express Assignment 2 + 3', user: req.session.username });
});

module.exports = router;
