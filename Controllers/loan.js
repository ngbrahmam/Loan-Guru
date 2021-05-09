
const universalFunc = require('../Utils/universalFunctions');
const loan_model = require('../Models/loans');

module.exports = {

	// Create a new loan.
	createLoan: function (data, cb) {

		console.log("Controllers: Inside 'createLoan' functionality.");

		universalFunc.saveInDB(loan_model, data, function (err, res) {
			if (err) {
				cb(err, null);
			} else {
				cb(null, res);
			}
		});

	},

	// Get Loans List.
	listLoan: function (data, cb) {
		var queryObj = {};
		(data.loanId) ? queryObj.loanId = data.loanId : null;
		console.log("Controllers: Inside 'listLoan' functionality.");

		universalFunc.list_documents_in_DB(loan_model, queryObj, function (err, res) {
			if (err) {
				cb(err, null);
			} else {
				cb(null, res);
			}
		})
	},

	// Update Loan.
	updateLoan: function (data, cb) {

		console.log("Controllers/loan.js: Inside 'updateLoan' functionality.");

		const queryObj = {
			_id: data.loanId
		};
		// using terinory operator to update the loan details
		const updateObj = {};
		(data.loanId) ? updateObj.loanId = data.loanId : null;
		(data.loanType) ? updateObj.loanType = data.loanType : null;
		(data.amount) ? updateObj.amount = data.amount : null;
		(data.payment_mode) ? updateObj.payment_mode = data.payment_mode : null;

		universalFunc.find_and_update_in_DB(loan_model, queryObj, updateObj, function (err, res) {
			if (err) {
				cb(err, null);
			} else {
				cb(null, res);
			}
		})
	},

	// Delete Loan from the database.
	deleteLoan: function (data, cb) {
		console.log("Controllers/loan.js: Inside 'deleteLoan' functionality.");

		const queryObj = {
			_id: data.loanId
		};

		universalFunc.delete_document_in_DB(loan_model, queryObj, function (err, res) {
			if (err) {
				cb(err, null);
			} else {
				cb(null, res);
			}
		});
	}
};











