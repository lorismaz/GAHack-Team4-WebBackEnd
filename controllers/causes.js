var Cause = require('../models/Cause.js');

var controller = {
  index: function(req, res){
    res.json({message: 'Cause index'});
  },

  show: function(req, res){
    res.json({message: 'Cause show'});
  },

  create: function(req, res){
    res.json({message: 'Cause create'});
  },

  update: function(req, res){
    res.json({message: 'Cause update'});
  },

  destroy: function(req, res){
    res.json({message: 'Cause destroy'});
  }
}

module.exports = controller;
