var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  const foobar = process.env.FOOBAR;
  res.render('index', { title: foobar });
});

module.exports = router;
