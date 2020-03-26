const Joi = require('@hapi/joi');

/**
 * Utility method which is used for validating the request body parameters 
 */
class User_Validation {


    /**
     * 
     * @param {*} user
     * 
     *this static method puts the validation logic which needs to be applied on each of the fields of the request parameters 
     * 
     */
    static validateRegister(user) {
        console.log("valtiosds");
        const registerValidation = Joi.object({
            name: Joi.string()
                .alphanum()
                .min(3)
                .max(30)
                .required(),

            password: Joi.string()
                .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),

            email: Joi.string()
                .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required()
        })

        return registerValidation.validate(user, { abortEarly: false });
    }


    /**
     * 
     * @param {*} error
     * 
     *  static method which collects the error response from the Joi package and parses it to be sent as a response 
     */
    static getErrorObj(error) {
        let err_obj = {};
        for (let err_idx in error.details) {
            let err_dtl = error.details[err_idx];
            err_obj[err_dtl["path"]] = err_dtl["message"];
        }
        return err_obj;
    }
}


module.exports = User_Validation;