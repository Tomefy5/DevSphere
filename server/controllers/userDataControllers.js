const {
  createUserData,
  updateUserData,
} = require("../services/userDataServices");

const createUserDataHandler = async (req, res) => {
  try {
    const newUserData = await createUserData(req.body);
    res.json(newUserData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateUserDataHandler = async (req, res) => {
  const { userId } = req.params;

  try {
    const updatedUserData = await updateUserData(userId, req.body);
    res.json(updatedUserData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createUserDataHandler,
  updateUserDataHandler
};
