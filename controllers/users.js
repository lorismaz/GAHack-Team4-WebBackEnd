var User = require('../models/User.js');

var controller = {
   login: function(req, res){

   },

   register: function(req, res){

   },

   logout: function(req, res){

   },

  index: function(req, res){
    User.find({}, function(err, users){
      res.json(err || users)
    })
  },

  show: function(req, res){
    User.findById(req.params.id, function(err, user){
      res.json(err || user)
    })
  },

  create: function(req, res){
    User.create(req.body, function(err, user){
      res.json(err || user)
    })
  },

  update: function(req, res){
    User.findByIdAndUpdate(req.params.id, req.body, {new:true}, function(err, user){
      res.json(err || user)
    })
  },

  destroy: function(req, res){
    User.findByIdAndRemove(req.params.id, function(err, user){
      res.json(err || user)
    })
  }
}

module.exports = controller;
