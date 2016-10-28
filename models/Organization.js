var mongoose = require('mongoose');

var organizationSchema = mongoose.Schema({
  name: String,
  description: String,
  image_url: String,
}, { timestamps: true });

var Organization = mongoose.model('Organization', organizationSchema);

module.exports = Organization;
