// This file carries all the customer related APIs handler methods.
const customers_model = require('../Models/customers');

// Require Utility functions.
const universalFunc = require('../Utils/universalFunctions');

module.exports = {

	/*
		methodNameForAPI: annamousFunction(dataObject, calllbackFunction);
	*/

	// Add new customer.
	addCustomer: function(data, cb){

		console.log("Controllers: Inside addCustomer function.");

		customers_model(data).save(function(err, res){
			if(err){
				cb(err, null);
			}else{
				let resp = {
					message: "Customer created scuccessfully.",
					savedUserObject: res,
					author: "Mahesh Duddukuri",
					date: new Date()
				};
				// Send email to the register user.
				universalFunc.sendEmail(data.email, function(err, res1){
					if(err){
						cb(err, null);
					} else {
						resp.emailwarning = `email sent successfully to ${data.email}`;
						cb(null, resp);
					}
				});
			}
		});
	},

	// Get all the customers list in the DB.
	listCustomers: function(data,cb){

		var queryObj = {};
		(data._id) ? queryObj._id=data._id:null;

		customers_model.find(queryObj, function(err, res){
			if(err){
				cb(err, null);
			}else{
				cb(null, res);
			}
		});
	},

	// Update customer record.
	updateCustomer: function(data, cb){
		// Here is the logic to update the customer data which is already there in our database.
		let queryObj = {
			_id: data.customerId
		};
		// using terinory operator to update the customer details
		var updateObj = {};
		(data.customerId) ? updateObj.customerId=data.customerId:null;
		(data.firstName) ? updateObj.firstName=data.firstName:null;
		(data.lastName) ? updateObj.lastName=data.lastName:null;
		(data.age) ? updateObj.age=data.age:null;
		(data.gender) ? updateObj.gender=data.gender:null;
		customers_model.findOneAndUpdate(queryObj, updateObj, function(err, res){
			if(err){
				cb(err, null);
			}else{
				let resp = {
					message: "Customer record updated successfully.",
					data: res
				}
				cb(null, resp);
			}
		});
	},

	// Delete customer record.
	deleteCustomer: function(data, cb){
		// write the DB query to delete the customer reord from the collection.
		let queryObj = {
			_id: data.customerId
		};
		customers_model.deleteOne(queryObj, function(err, res){
			if(err){
				cb(err, null);
			}else{
				let resp = {
					message: "Customer record deleted successfully.",
					data: res
				}
				cb(null, resp);
			}
		});
	}

};













