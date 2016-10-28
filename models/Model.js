var mongoose = require('mongoose');

var modelSchema = mongoose.Schema({
  name: String
}, { timestamps: true });

var Model = mongoose.model('Model', modelSchema);

module.exports = Model;
