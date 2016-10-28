var mongoose = require('mongoose');

var donationSchema = mongoose.Schema({
  cause: {type: mongoose.Schema.Types.ObjectId, ref: 'Cause'},
  amount: Number
}, { timestamps: true });

var userSchema = mongoose.Schema({
  name: String,
  password: String,
  donations: [donationSchema]
}, { timestamps: true });

var User = mongoose.model('User', userSchema);

module.exports = User;
