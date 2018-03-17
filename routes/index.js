var express = require('express');
var router = express.Router();
var data = require('../model/data');



/* GET home page. */
router.get('/', function(req, res) {
  res.send(data);
});

router.get('/student', function(req, res) {
  res.send(data[Math.floor(Math.random() * data.length)]);
});

router.get('/student/:sid', function(req, res) {
  for (var i=0; i<data.length; i++){
    if(data[i].sid == req.params.sid){
      res.send(data[i]);
    }
  }
  res.send('{}');
});




module.exports = router;
