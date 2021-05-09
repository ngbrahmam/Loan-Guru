
const rePayment_ctrl = require('../Controllers/rePayment');
const rePayment_data_validator=require('../Utils/rePayement_data_validator')

module.exports = function(app){

	// Add a new repayment record.
	app.post('/repayment/add', function(req, res){
        const{error}=rePayment_data_validator.rePayment_data_validator_to_add.validate(req.body);
		if(error) return res.send(error.details[0].message);
		console.log("Rountes/repayment: Inside '/repayment/add' functionality.");
		
		rePayment_ctrl.add_rePayment(req.body, function(err, result){
			if(err){
				res.send(err);
			}else{
				res.send(result);
			}
		});
	});

	// Get repayments lists.
	app.get('/repayment/list', function(req, res){
        const{error}=rePayment_data_validator.rePayment_data_validator_list.validate({});
		if(error) return res.send(error.details[0].message);
		console.log("Rountes/repayment: Inside '/repayment/lost' functionality.");

		rePayment_ctrl.list_rePayment(req.query, function(err, result){
			if(err){
				res.send(err);
			}else{
				res.send(result);
			}
		});
	});

	//Update repayment record.
	app.put('/repayment/update', function(req, res){
        const{error}=rePayment_data_validator.rePayment_data_validator_to_update.validate(req.body);
	  if(error) return res.send(error.details[0].message);
		console.log("Routes/repayment: Inside '/repayment/update' functionality.");
		rePayment_ctrl.update_rePayment(req.body, function(err, result){
			if(err){
				res.send(err);
			}else{
				res.send(result);
			}
		});
	});

	// Delete repayment record.
	app.delete('/repayment/delete', function(req, res){

		console.log("Routes/repayment: Inside '/repayment/delete' functionality.");

		rePayment_ctrl.delete_rePayment(req.body, function(err, result){
			if(err){
				res.send(err);
			}else{
				res.send(result);
			}
		})
	})

}










