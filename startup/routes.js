const users = require("../routes/users");
//this is the area where we register the routes group(base routes endpoint ) with router object 
module.exports = function(app) {
    app.use("/api/users", users);
}