var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var controller = require('./controllers/controllers.js');
var dotenv = require('dotenv').load({silent: true})

var PORT = 3000;
var mongoUser = process.env.MONGO_USER;
var mongoPassword = process.env.MONGO_PASS;

console.log(mongoUser);
console.log(mongoPassword);

mongoose.connect('mongodb://' + mongoUser + ':' + mongoPassword + '@ds137207.mlab.com:37207/ga-conserve', function(err, db){
  if(err) {
    console.log(err);
  } else {
    console.log('Connected to mongodb!');
  }
});

app.use(logger('dev'));

app.use('/', controller.index);

app.listen(PORT, function(err){
  console.log(err || 'Listening on port '+ 3000);
})
