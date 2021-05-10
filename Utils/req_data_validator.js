const Joi=require('joi');
module.exports={
    //To check the required customer data validation 
    customer_require_validator:Joi.object().keys({
        firstName: Joi.string().required().min(3).max(5),
        lastName: Joi.string().required(),
        age: Joi.string().required(),
        gender: Joi.string().required(),
        address: Joi.string().required(),
        mobile_num: Joi.number().required().min(10),
        emial: Joi.string().required(),
        occupation: Joi.string().required()
    }),
    //To check the required list of customers based on the _id proerty
    customer_require_validator_list:Joi.object().keys({
        _id:Joi.string().required().min(24)
    }),
    //To check the required data to update the customer
    customer_require_validator_update:Joi.object().keys({
        customerId:Joi.string().required(),
        firstName: Joi.string().required().min(3).max(5),
        lastName: Joi.string().required(),
        age: Joi.number().required(),
        gender: Joi.string().required()

    }),
    customer_require_validator_to_delete:Joi.object().keys({
        _id:Joi.string().required()
    })
}