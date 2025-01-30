const { signup } = require("../services/authServices");

const signupHandler = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const newUser = await signup({ username, email, password });
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  signupHandler,
};
