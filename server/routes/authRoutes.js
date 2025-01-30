const express = require("express");
const router = express.Router();
const authController = require("../controllers/authControllers");

// Route for signup
router.post("/signup", authController.signupHandler);

module.exports = router;