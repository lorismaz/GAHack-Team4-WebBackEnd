var Cause = require('../models/Cause.js');

var controller = {
  index: function(req, res){
    Cause.find({}, function(err, causes){
      res.json(err || causes)
    })
  },

  show: function(req, res){
    Cause.findById(req.params.id, function(err, cause){
      res.json(err || cause)
    })
  },

  create: function(req, res){
    Cause.create(req.body, function(err, cause){
      res.json(err || cause)
    })
  },

  update: function(req, res){
    Cause.findByIdAndUpdate(req.params.id, req.body, {new:true}, function(err, cause){
      res.json(err || cause)
    })
  },

  destroy: function(req, res){
    Cause.findByIdAndRemove(req.params.id, function(err, cause){
      res.json(err || cause)
    })
  }
}

module.exports = controller;
