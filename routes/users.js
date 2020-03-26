const express = require('express');
const router = express.Router();
const UserController = require("../controllers/UsersController");

let controller = new UserController();

// routes related to '/api/users' are registered here conforming the rest api verbs
router.post("/register", async(req, res) => {
    //fetch the user response from the controller
    const user = await controller.register(req, res);

    res.send(user);
});

module.exports = router;