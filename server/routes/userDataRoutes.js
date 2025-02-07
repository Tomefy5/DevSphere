const express = require("express");
const userDataControllers = require("../controllers/userDataControllers");
const router = express.Router();

// Route for creating new userData
router.post("/user-data", userDataControllers.createUserDataHandler);

// Route for updated userData
router.post("/:userId/update-user-data", userDataControllers.updateUserDataHandler);


module.exports = router;
