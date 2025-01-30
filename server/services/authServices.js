const User = require("../models/User");

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

module.exports = { signup };
