var mongoose = require('mongoose');

var causeSchema = mongoose.Schema({
  name: String,
  description: String,
  image_url: String,
  organizations: [{type: mongoose.Schema.Types.ObjectId, ref: 'Organization'}]
}, { timestamps: true });

var Cause = mongoose.model('Cause', causeSchema);

module.exports = Cause;
