const express = require('express');
const bodyParser = require('body-parser');
let cors = require('cors');

//this is third party middlewares used to handle cors,and parse json from request body and put it into req.body
module.exports = function(app) {
    app.use(cors());
    app.use(bodyParser.json());

}