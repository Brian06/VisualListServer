const visualService = require('../services/visualService');

exports.getVisuals = function(req, res) {
  visualService.getVisuals((err, visuals) => {
    if(err) {
      throw err;
    }
    res.json(visuals);
  });
}

exports.addVisual = function(req, res) {
  const visual = req.body;
  visualService.addVisual(visual,(err, visuals) => {
    if(err) {
      throw err;
    }
    res.json(visuals);
  });
}

exports.updateVisual = function(req, res) {
  const id = req.params._id;
	const visual = req.body;
	visualService.updateVisual(id, visual, {}, (err, visual) => {
		if(err){
			throw err;
		}
		res.json(visual);
	});
}

exports.removeVisual = function(req,res) {
  const id = req.params._id;
	visualService.removeVisual(id, (err, visual) => {
		if(err){
			throw err;
		}
		res.json(visual);
	});
}

exports.addVisualToUser = function(req,res) {
  const idVisual = req.body.idVisual;
  const idUser = req.body.idUser;
  console.log(idVisual)
  console.log(idUser)
	visualService.addVisualToUser(idVisual, idUser, (err, visual) => {
		if(err){
			throw err;
		}
		res.json(visual);
	});
}