var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var reviewSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now }, //TODO how to handle the date
  comment: { type: String, required: true},
  agrees: { type: Number, default:0 },
  disagrees: { type: Number, default:0 },
  story: { type: Number, default:0 },
  animation: { type: Number, default:0 },
  sound: { type: Number, default:0 },
  character: { type: Number, default:0 },
  enjoyment: { type: Number, default:0 },
  user: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Review', reviewSchema);