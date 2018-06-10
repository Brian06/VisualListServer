var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var reviewSchema = new mongoose.Schema({
  date: { type: String }, //TODO how to handle the date
  comment: { type: String },
  agrees: { type: Number },
  disagrees: { type: Number},
  story: { type: Number},
  animation: { type: Number},
  sound: { type: Number},
  character: { type: Number},
  enjoyment: { type: Number},
  user: [{ type: Number, ref: 'User' }]
});

module.exports = mongoose.model('Review', reviewSchema);