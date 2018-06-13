const mongoose = require('mongoose'),
  Visual = require('../models/visual'),
  User = require('../models/user');

exports.getVisuals = (callback, limit) => {
	Visual.find(callback).limit(limit);
}

exports.addVisual = (visual, callback) => {
	Visual.create(visual, callback);
}

exports.updateVisual = (id, visual, options, callback) => {
	const query = {_id: id};
	var update = {
    $set: {
      actors: visual.actors, 
      alternativeTitles: visual.alternativeTitles,
      director: visual.director,
      duration: visual.duration,
      episodes: visual.episodes,
      genres: visual.genres,
      name: visual.name,
      rating: visual.rating, 
      realeaseDate: visual.realeaseDate,
      studio: visual.studio,
      synopsis: visual.synopsis,
      type: visual.type
    } 
	}
	Visual.findOneAndUpdate(query, update, options, callback);
}

exports.removeVisual = (id, callback) => {
  const query = {_id: id};
	Visual.remove(query, callback);
}

exports.addVisualToUser = (idVisual, idUser, callback) => {
  const query = {_id: idUser};
  User.findOne(query,function (err,user) {
    console.log(user)
    user.visuals.push(idVisual);
    user.save();
  })
}

