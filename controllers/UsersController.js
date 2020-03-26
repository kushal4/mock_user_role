const User = require("../models/Users");
const _ = require("lodash");
const bcrypt = require("bcrypt");
const User_Validation = require("../utils/user_validation");
const User_Roles = require("../models/User_Roles");

class UsersController {

    /**
     * 
     * @param {*} req  request object which contains the request parameters
     * @param {*} res  response object which is used to send response back to the client
     * 
     * public controller method which parses the request parameters 
     * and accordingly validates and sends back a proper user response, 
     * if the client  sends a proper validated request json
     * 
     */
    async register(req, res) {

        try {
            const err_data = await this._validate_user(req);
            let register_creds = _.pick(req.body, ["name", "email", "password"]);
            if (Object.keys(err_data).length) {
                console.log(err_data);
                return err_data;
            }
            const salt = await bcrypt.genSalt(10);
            register_creds["password"] = await bcrypt.hash(register_creds["password"], salt);
            let user = (await User.create(register_creds)).toJSON();
            let user_role_obj = {};
            if (user["id"] == 1) {
                user_role_obj = {
                    role: "admin",
                    user_id: user["id"]
                }
            } else {
                user_role_obj = {
                    role: "normal",
                    user_id: user["id"]
                }
            }
            let user_role = (await User_Roles.create(user_role_obj)).toJSON();
            if (user_role) {

                user = _.pick(user, ["name", "email"]);
                user["code"] = 200;
                return user;
            }
        } catch (ex) {

        }


    }

    /**
     * 
     * @param {*} req  request object
     * private method which is used for validating the request parameters and
     *  if its not valid send an error response back to the client
     */
    async _validate_user(req) {
        //do the validation check or sanitization for the request body parameters here
        let { error } = User_Validation.validateRegister(req.body);
        if (error) {
            //error object fetched if any validation fails in the request body check
            let err_obj = User_Validation.getErrorObj(error);
            console.log({
                code: 407,
                errors: err_obj
            })
            return {
                code: 406,
                errors: err_obj
            };
        }
        //generate the salt for hashing the pasword



        //check here whether user with the same email exists or not ,if it exist send an error response back to the client
        let user = await User.findOne({
            where: {
                email: req.body.email
            }
        });
        if (user) return {
            code: 405,
            message: "User already exists"
        }

        return {

        };
    }
}


module.exports = UsersController;