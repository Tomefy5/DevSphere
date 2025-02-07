const { createUserData } = require("../services/userDataServices");

const createUserDataHandler = async (req, res) => {
  try {
    const newUserData = await createUserData(req.body);
    res.json(newUserData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createUserDataHandler,
};
