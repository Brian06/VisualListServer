const mongoose = require('mongoose'),
  Visual = require('../models/visual');

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
      email: visual.email,
      name: visual.name,
      password: visual.password
    } 
	}
	Visual.findOneAndUpdate(query, update, options, callback);
}

exports.removeVisual = (id, callback) => {
	var query = {_id: id};
	Visual.remove(query, callback);
}