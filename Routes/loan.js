
const loan_ctrl = require('../Controllers/loan');
const loan_data_validator=require('../Utils/loan  data validator');

module.exports = function(app){

	// Create a loan.
	app.post('/loan/create', function(req, res){
		const{error}=loan_data_validator.loan_data_validator_to_add.validate(req.body);
		if(error) return res.send(error.details[0].message);
		console.log("Routes/loan: Inside '/loan/create' functionality.");
		loan_ctrl.createLoan(req.body, function(err, result){
			if(err){
				res.send(err);
			}else{
				res.send(result);
			}
		});
		
	});

	// Get the loans list.
	app.get('/loan/list', function(req, res){

		const{error}=loan_data_validator.load_validator_list.validate({});
		if(error) return res.send(error.details[0].message);
		console.log("Routes/loan: Inside '/loan/list' functionality.");
		loan_ctrl.listLoan(req.query, function(err, result){
			if(err){
				res.send(err);
			}else{
				res.send(result);
			}
		});
	});

	// Update a Loan record.
	app.put('/loan/update', function(req, res){

      const{error}=loan_data_validator.loan_require_validator_update.validate(req.body);
	  if(error) return res.send(error.details[0].message);

		console.log("Routes/loan: Inside '/loan/update' functionality.");
		loan_ctrl.updateLoan(req.body, function(err, result){
			if(err){
				res.send(err);
			}else{
				res.send(result);
			}
		})
	});

	// Delete Loan record from database.
	app.delete('/loan/delete', function(req, res){

		console.log("Routes/loan: Inside '/loan/delete' functionality.");

		loan_ctrl.deleteLoan(req.body, function(err, result){
			if(err){
				res.send(err);
			}else{
				res.send(result);
			}
		})
	})

};







