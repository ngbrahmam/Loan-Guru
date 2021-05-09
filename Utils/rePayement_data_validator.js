const Joi=require('joi');
module.exports={
    //To check the required rePayment data validation
    rePayment_data_validator_to_add:Joi.object().keys({
        re_payment_amount: Joi.string().required()
    }),
    //To check the required list in rePayment based on the _id proerty
    rePayment_data_validator_list:Joi.object().keys({
        repaymentId:Joi.string().required()
    }),
    //To check the required details to update in rePayment  
    rePayment_data_validator_to_update:Joi.object().keys({
        repaymentId:Joi.string().required(),
        re_payment_amount:Joi.string().required()
    })
}