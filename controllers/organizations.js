var Organization = require('../models/Organization.js');

var controller = {
  index: function(req, res){
    Organization.find({}, function(err, users){
      res.json(err || users)
    })
  },

  show: function(req, res){
    Organization.findById(req.params.id, function(err, user){
      res.json(err || user)
    })
  },

  create: function(req, res){
    Organization.create(req.body, function(err, user){
      res.json(err || user)
    })
  },

  update: function(req, res){
    Organization.findByIdAndUpdate(req.params.id, req.body, {new:true}, function(err, user){
      res.json(err || user)
    })
  },

  destroy: function(req, res){
    Organization.findByIdAndRemove(req.params.id, function(err, user){
      res.json(err || user)
    })
  }
}

module.exports = controller;
