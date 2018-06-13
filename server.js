const express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  methodOverride = require("method-override"),
  mongoose = require('mongoose');

const apiUrlBase = "/visualList/api/v1"; 

// Import Models and controllers
const userController = require('./controllers/userController');
const visualController = require('./controllers/visualController');


// Connection to DB
const connection = mongoose.connect('mongodb://localhost/test4586', function(err, res) {
  if(err) throw err;
  console.log('Connected to Database');
});

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

// Enable CORS from client-side
app.use(function(req, res, next) {  
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.get('/', (req, res) => {
	res.send('Please use /visualList/api/v1');
});

//Users
app.get(`${apiUrlBase}/users`, userController.getUsers);
app.post(`${apiUrlBase}/users`, userController.addUser);
app.put(`${apiUrlBase}/users/:_id`, userController.updateUser);
app.delete(`${apiUrlBase}/users/:_id`, userController.removeUser);

//Visuals
app.get(`${apiUrlBase}/visuals`, visualController.getVisuals);
app.post(`${apiUrlBase}/visuals`, visualController.addVisual);
app.put(`${apiUrlBase}/visuals/:_id`, visualController.updateVisual);//admin update all
app.delete(`${apiUrlBase}/visuals/:_id`, visualController.removeVisual);

app.post(`${apiUrlBase}/visualstoUser/`, visualController.addVisualToUser);


// Start server
app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});