const express = require('express');
const app = express();

//module for global middleware and routes are registered and segregated into a different module
require("./startup/middleware")(app)
require("./startup/routes")(app)

// fetch port either from the environment console or default value.
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));