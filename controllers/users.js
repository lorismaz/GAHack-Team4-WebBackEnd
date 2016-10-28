var User = require('../models/User.js');

var controller = {
  index: function(req, res){
    res.json({message: 'User index'});
  },

  show: function(req, res){
    res.json({message: 'User show'});
  },

  create: function(req, res){
    res.json({message: 'User create'});
  },

  update: function(req, res){
    res.json({message: 'User update'});
  },

  destroy: function(req, res){
    res.json({message: 'User destroy'});
  }
}

module.exports = controller;
