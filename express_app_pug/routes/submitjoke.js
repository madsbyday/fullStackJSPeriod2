var express = require('express');
var router = express.Router();
var jokes = require('../model/jokes.js');

router.post('/', function (req, res, next) {
    const joke = req.body.joketb;
    if (joke != null)
        jokes.addJoke(joke);

    res.redirect('addjoke')
});

module.exports = router;
