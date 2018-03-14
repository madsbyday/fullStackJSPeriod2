var express = require('express');
var router = express.Router();

/* GET home page. */
var sess;
router.get('/', function (req, res, next) {
    if (req.session.username == null)
        res.render('login');
    else
    res.redirect('/')
});

module.exports = router;
