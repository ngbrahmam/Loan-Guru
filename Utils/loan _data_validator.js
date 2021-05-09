const Joi=require('joi');
module.exports={
     //To check the required loan data validation
    loan_data_validator_to_add:Joi.object().keys({
    loanType: Joi.string().required(),
	amount: Joi.number().required(),
	payment_mode: Joi.string().required()
    }),
     //To check the required list of customers based on the loanId proerty
    load_validator_list:Joi.object().keys({
        loanId:Joi.string().required().min(24)
    }),
    //To check the required details to update in loan 
    loan_require_validator_update:Joi.object().keys({
        loanId:Joi.string().required().min(24),
        loanType: Joi.string().required(),
        amount: Joi.number().required(),
        payment_mode: Joi.string().required()
        })
}