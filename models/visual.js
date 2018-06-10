var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var visualSchema = new mongoose.Schema({
  actors: [{ type: String }], //TODO save "carlos as brian"
  alternativeTitles: [{ type: String }],
  director: { type: String },
  duration: { type: String },//x min per ep or 1h y 30 min
  episodes: { type: Number },
  favorite: { type: Boolean },
  genres: [{ type: String }],
  name: { type: String },
  rating: { type: String }, //PG-13 - Teens 13 or older
  realeaseDate: { type: String }, //TODO how to handle the date
  score: { type: Number },
  status: { type: String },
  studio: { type: String },
  synopsis: { type: String },
  type: { type: String }, //movie,TV Serie..
  reviews: [{ type: Number, ref: 'Review' }]
});

module.exports = mongoose.model('Visual', visualSchema);

//TODO include the rank, numFavs, totalScore, numUserScored in the get 
//TODO numUser with score10, score9...