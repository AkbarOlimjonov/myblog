const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'IT-blog' });
});

router.get('/all', function(req, res, next) {
  res.render('index', { title: '' });
});

module.exports = router;
