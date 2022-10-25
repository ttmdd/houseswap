var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send({ title: 'Express' });  // added manually to replace the above line
});

module.exports = router;



