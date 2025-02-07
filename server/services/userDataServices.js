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

const updateUserData = async (userId, updatedData) => {
  try {
    const userDataToUpdate = await UserData.findOneAndUpdate(
      { user: userId },
      updatedData,
      { new: true }
    );

    if (!userDataToUpdate)
      throw new Error("updateUserData: failed to update user data");
    return userDataToUpdate;
  } catch (error) {
    throw error;
  }
};

module.exports = { createUserData, updateUserData };
