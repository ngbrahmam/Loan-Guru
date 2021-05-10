
const loan_ctrl = require('../Controllers/loan');
const loan_data_validator=require('../Utils/loan _data_validator');

module.exports = function(app){

	// Create a loan.
	app.post('/loan/create', function(req, res){

		//to add the loan details
		const{error}=loan_data_validator.loan_data_validator_to_add.validate(req.body);
		if(error) return res.send(error.details[0].message);

		// Add loan record logic here.
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
        //to get the particular/all the list of the loans
		const{error}=loan_data_validator.load_validator_list.validate({});
		if(error) return res.send(error.details[0].message);

		// list loan record logic here.
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
        //to update the loan details
      const{error}=loan_data_validator.loan_require_validator_update.validate(req.body);
	  if(error) return res.send(error.details[0].message);

	   // update loan record logic here
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

		//to delete the loan details
		const{error}=loan_data_validator.loan_require_validator_to_delete.validate(req.body);
		if(error) return res.send(error.details[0].message);
		console.log("Routes/loan: Inside '/loan/delete' functionality.");

		// Delete loan record logic here.
		loan_ctrl.deleteLoan(req.body, function(err, result){
			if(err){
				res.send(err);
			}else{
				res.send(result);
			}
		})
	})

};







