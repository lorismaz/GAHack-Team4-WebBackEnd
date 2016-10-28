var Organization = require('../models/Organization.js');

var controller = {
  index: function(req, res){
    res.json({message: 'Organization index'});
  },

  show: function(req, res){
    res.json({message: 'Organization show'});
  },

  create: function(req, res){
    res.json({message: 'Organization create'});
  },

  update: function(req, res){
    res.json({message: 'Organization update'});
  },

  destroy: function(req, res){
    res.json({message: 'Organization destroy'});
  }
}

module.exports = controller;
