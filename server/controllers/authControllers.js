const jwt = require("jsonwebtoken");
const { signup, login } = require("../services/authServices");

const signupHandler = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const newUser = await signup({ username, email, password });
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const loginHandler = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await login({ email, password });

    // Generate token for session
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "2h",
    });

    // Send token with cookie
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: false, // true en production
      maxAge: 2 * 60 * 60 * 1000,
      path: "/",
    });

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  signupHandler,
  loginHandler,
};
