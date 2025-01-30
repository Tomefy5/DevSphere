const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");


const signup = async (user) => {
  try {
    // Info verification
    if (!user.username || !user.password || !user.email) {
      throw new Error("signup: registration failed");
    }

    // Verify exisnting user
    const exisntingUser = await User.findOne({ email: user.email });
    if (exisntingUser) {
      throw new Error("Email already used");
    }

    const newUser = new User(user);
    await newUser.save();
    return newUser;
  } catch (error) {
    throw error;
  }
};

const login = async (userLogin) => {
  try {
    if (!userLogin.email || !userLogin.password) {
      throw new Error("login: Invalid login information");
    }

    //todo: verrify email validity

    // Does the user exist ?
    const user = await User.findOne({ email: userLogin.email });
    if (!user) throw new Error("login: User not found");

    // Verify password
    const isMatch = await bcrypt.compare(userLogin.password, user.password); // there is an order with params
    if (!isMatch) throw new Error(`login: password doesn't match: ${user.password} et ${userLogin.password}: ${isMatch}`);

    return user;
  } catch (error) {
    throw error;
  }
};

module.exports = { signup, login };
