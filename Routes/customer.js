// This file defines all customer routes.

const custCntrls = require('../Controllers/customer');
const req_data_validator=require('../Utils/req_data_validator');

const Joi=require('joi');

module.exports = function(app){

	/*Express API creation format
	
		applicationObject.MethodName(API path, handler function);

		Handler function have two params.
		1. Request- It is having all the API request data.
		2. It have all the methods to send the response to this route.
	*/

	// Add customer route.
	app.post('/customer/add', function(req, res){

		//to add the customers details
        const{error}=req_data_validator.customer_require_validator.validate(req.body);
		if(error) return res.send(error.details[0].message);

		// Add customer record logic here.
		console.log("Routes: Inside '/customer/add' API function.");
		custCntrls.addCustomer(req.body, function(err, result){
			if(err){
				res.send(err);
			}else{
				res.send(result);
			}
		});

	});

	// Get customers List.
	app.get('/customer/list', function(req, res){
       
		//to get the particular/all the list of the customer
		const{error}=req_data_validator.customer_require_validator_list.validate({});
		if(error) return res.send(error.details[0].message);

		// list customer record logic here.
		custCntrls.listCustomers(req.query,function(err, result){
			if(err){
				res.send(err);
			}else{
				res.send(result);
			}
		});
	});

	// Update customer data.
	app.put('/customer/update', function(req, res){

		//to update the customer details 
      const{error}=req_data_validator.customer_require_validator_update.validate(req.body);
	  if(error) return res.send(error.details[0].message);

	  // update customer record logic here.
		custCntrls.updateCustomer(req.body, function(err, result){
			if(err){
				res.send(err);
			}else{
				res.send(result);
			}
		});
	});

	// Delete customer document.
	app.delete('/customer/delete', function(req, res){

		//to delete the customer details 
		const{error}=req_data_validator.customer_require_validator_to_delete.validate(req.body);
		if(error) return res.send(error.details[0].message);

		// Delete customer record logic here.
		custCntrls.deleteCustomer(req.body, function(err, result){
			if(err){
				res.send(err);
			}else{
				res.send(result);
			}
		});
	})

};








