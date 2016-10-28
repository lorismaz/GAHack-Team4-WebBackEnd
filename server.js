var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var PORT = 3000;

mongoose.connect('mongodb://localhost/conserve', function(err, db){
  if(err) {
    console.log(err);
  } else {
    console.log('Connected to mongodb!');
  }
});

app.use(logger('dev'));

app.listen(PORT, function(err){
  console.log(err || 'Listening on port '+ 3000);
})
