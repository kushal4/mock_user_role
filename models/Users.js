const Sequelize = require("sequelize");
const sequelize = require("./index");
const User_Roles = require("./User_Roles");
/**
 * 
 * this is the Users model which defines the prototype of the 'users' table and its coloumns which it has 
 */

const Model = Sequelize.Model;
class User extends Model {}
User.init({
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: false,
    sequelize,
    modelName: 'users'
        // options
});

//relationship is setup between User model and User_roles model with hasOne(since a user will have only one user role)
User.hasOne(User_Roles);


module.exports = User;