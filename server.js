// Main file to init the application.

// Require the express module.
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// require Customer routes.
const customerRoutes = require('./Routes/customer');
// Require loan routes.
const loanRoutes = require('./Routes/loan');
// Require repayment routes.
const rePaymentRoutes = require('./Routes/rePayment');
// Create the express Node app.
const app = express();

// parse application/json
app.use(bodyParser.json());

// Add customer routes to the application.
customerRoutes(app);
// Adding loan routes to the application.
loanRoutes(app);
//Adding rePayment rountes to the application.
rePaymentRoutes(app);
 
// Create the base route.
app.get('/', function (req, res) {
  res.send('Welcome To Instal Loan');
});
 
// Start the server.
app.listen(5000);
console.log("App is running in the URL: http://localhost:3000");

// DB connection.
// mongoose.connect(MongoDB_connection_String, Options_object, callback-function);
mongoose.connect('mongodb://localhost:27017/loanGuru', {useNewUrlParser: true}, function(err, res){
	if(err){
		console.log('\x1b[31m',"@ DB connection error: ", err);
	}else{
		console.log('\x1b[34m',"@ MongoDB connection established successfully.");
	}
});


