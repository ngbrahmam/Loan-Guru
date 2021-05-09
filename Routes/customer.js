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
        const{error}=req_data_validator.customer_require_validator.validate(req.body);
		if(error) return res.send(error.details[0].message);
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
       
		const{error}=req_data_validator.customer_require_validator_list.validate({});
		if(error) return res.send(error.details[0].message);
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
      const{error}=req_data_validator.customer_require_validator_update.validate(req.body);
	  if(error) return res.send(error.details[0].message);
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








