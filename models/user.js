var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
  email: { type: String, unique: true},
  name: { type: String },
  password: { type: String },
  type: { type: String},
  visuals: [{ type: Number, ref: 'Visual' }]
});

module.exports = mongoose.model('User', userSchema);