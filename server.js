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

mongoose.connect('mongodb://' + mongoUser + ':' + mongoPassword + '@ds137207.mlab.com:37207/ga-conserve', function(err, db){
  if(err) {
    console.log(err);
  } else {
    console.log('Connected to mongodb!');
  }
});

app.use(logger('dev'));
app.use(bodyParser.json());

app.get('/ga-hack/api/users', usersController.index)
app.post('/ga-hack/api/users', usersController.create)
app.post('/ga-hack/api/users/:id/donate', usersController.createDonation)
app.get('/ga-hack/api/users/:id', usersController.show)
app.patch('/ga-hack/api/users/:id', usersController.update)
app.delete('/ga-hack/api/users/:id', usersController.destroy)

app.get('/ga-hack/api/causes', causesController.index)
app.post('/ga-hack/api/causes', causesController.create)
app.get('/ga-hack/api/causes/:id', causesController.show)
app.patch('/ga-hack/api/causes/:id', causesController.update)
app.delete('/ga-hack/api/causes/:id', causesController.destroy)

app.get('/ga-hack/api/organizations', organizationsController.index)
app.post('/ga-hack/api/organizations', organizationsController.create)
app.get('/ga-hack/api/organizations/:id', organizationsController.show)
app.patch('/ga-hack/api/organizations/:id', organizationsController.update)
app.delete('/ga-hack/api/organizations/:id', organizationsController.destroy)

app.get('/', function(req, res){
  res.json({messages: "Welcome to my site!"});
});

app.get('*', function(req, res){
  res.json({messages: "404"});
});

app.listen(PORT, function(err){
  console.log(err || 'Listening on port '+ 3000);
})
