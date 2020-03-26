const Sequelize = require("sequelize");
const sequelize = require("./index");


/**
 * This is the User_Roles model which defines the prototype of 'user_roles' table and its underlying coloumns which needs to be fetched by the api
 */
const Model = Sequelize.Model;
class User_Roles extends Model {}

User_Roles.init({

    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    role: {
        type: Sequelize.ENUM,
        allowNull: false,
        values: ["admin", "normal"]
    }
}, {
    timestamps: false,
    sequelize,
    modelName: 'user_roles'
        // options
});

module.exports = User_Roles;