let userService = require('../services/userService');

exports.getUsers = function(req, res) {
  userService.getUsers((err, users) => {
    if(err) {
      throw err;
    }
    res.json(users);
  });
}

exports.addUser = function(req, res) {
  const user = req.body;
  userService.addUser(user,(err, users) => {
    if(err) {
      throw err;
    }
    res.json(users);
  });
}

exports.updateUser = function(req, res) {
  const id = req.params._id;
	const user = req.body;
	userService.updateUser(id, user, {}, (err, user) => {
		if(err){
			throw err;
		}
		res.json(user);
	});
}

exports.removeUser = function(req,res) {
  const id = req.params._id;
	userService.removeUser(id, (err, user) => {
		if(err){
			throw err;
		}
		res.json(user);
	});
}



