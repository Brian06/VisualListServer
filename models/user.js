var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
  email: { type: String,  unique: true, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
  type: { type: String, required: true},
  visuals: [{ type: Schema.Types.ObjectId, ref: 'Visual' }]
});

module.exports = mongoose.model('User', userSchema);