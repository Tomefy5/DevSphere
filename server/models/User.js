const mongoose = require("mongoose");
const bcrypt = required("bcrypt");
const saltRound = 10;

const { Schema } = mongoose;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

// Hask Password
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, saltRound);
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
