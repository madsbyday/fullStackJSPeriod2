var express = require('express');
var router = express.Router();

router.post('/', function(req, res) {
    req.session.username = '';
    req.session.username = req.body.username;

    console.log(req.session.username)
    res.redirect('/')
});

module.exports = router;