
const universalFunc = require('../Utils/universalFunctions');
const rePayment_model = require('../Models/rePayments');

module.exports = {

	// Add new re-payment document.
	add_rePayment: function(data, cb){

		console.log("Controllers/rePayment: Inside add_rePayment functionality.");

		universalFunc.saveInDB(rePayment_model, data, function(err, res){
			if(err){
				cb(err, null);
			}else{
				cb(null, res);
			}
		});
	},

	//List re-payment records.
	list_rePayment: function(data, cb){
        var queryObj = {};
		(data.repaymentId) ? queryObj.repaymentId=data.repaymentId:null;
		console.log("Controllers/rePayment: Inside list_rePayment functionality.");

		universalFunc.list_documents_in_DB(rePayment_model, queryObj, function(err, res){
			if(err){
				cb(err, null);
			}else{
				cb(null, res);
			}
		});
	},

	// Update Re-payment record.
	update_rePayment: function(data, cb){

		console.log("Controllers/rePayment: Inside update_rePayment functionality.");
		const queryObj = { 
			_id: data.repaymentId
		};
		// using terinory operator to update the customer details
		const updateObj = {};
		(data.repaymentId) ? updateObj.repaymentId=data.repaymentId:null;
		(data.re_payment_amount) ? updateObj.re_payment_amount=data.re_payment_amount:null;

		universalFunc.find_and_update_in_DB(rePayment_model, queryObj, updateObj, function(err, res){
			if(err){
				cb(err, null);
			}else{
				cb(null, res);
			}
		});
	},

	// Delete rePayment record.
	delete_rePayment: function(data, cb){

		console.log("Controllers/rePayment: Inside delete_rePayment functionality.");
		const queryObj = { 
			_id: data.repaymentId
		};

		universalFunc.delete_document_in_DB(rePayment_model, queryObj, function(err, res){
			if(err){
				cb(err, null);
			}else{
				cb(null, res);
			}
		});
	}

};









