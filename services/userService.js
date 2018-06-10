const mongoose = require('mongoose');
User = require('../models/user');

exports.getUsers = (callback, limit) => {
	User.find(callback).limit(limit);
}

exports.addUser = (user, callback) => {
	User.create(user, callback);
}

exports.updateUser = (id, user, options, callback) => {
	const query = {_id: id};
	var update = {
    $set: {
      email: user.email,
      name: user.name,
      password: user.password
    } 
	}
	User.findOneAndUpdate(query, update, options, callback);
}

exports.removeUser = (id, callback) => {
	var query = {_id: id};
	User.remove(query, callback);
}