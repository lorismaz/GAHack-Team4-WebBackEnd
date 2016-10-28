var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var controller = require('./controllers/controllers.js');
var usersController = require('./controllers/users.js');
var causesController = require('./controllers/causes.js');
var organizationsController = require('./controllers/organizations.js');
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

app.use('/api/users', usersController.index)
app.use('/api/causes', causesController.index)
app.use('/api/organizations', organizationsController.index)

app.use('/', function(req, res){
  res.json({messages: "Welcome to my site!"});
});

app.listen(PORT, function(err){
  console.log(err || 'Listening on port '+ 3000);
})
