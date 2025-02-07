const express = require("express");
const userDataControllers = require("../controllers/userDataControllers");
const router = express.Router();

router.post("/user-data", userDataControllers.createUserDataHandler);

module.exports = router;
