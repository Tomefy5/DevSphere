const UserData = require("../models/UserData");

const createUserData = async (userData) => {
  try {
    // Object { ...UserData }
    const newUserData = new UserData(userData);
    if (!newUserData) {
      throw new Error("createUserData: failed to create new user Data ");
    }
    await newUserData.save();
    return newUserData;
  } catch (error) {
    throw error;
  }
};

module.exports = { createUserData };
