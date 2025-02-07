const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserDataSchema = new Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    profil: { type: String }, // url of profil's photo
    cover: { type: String }, // url of cover photo
    bio: { type: String },
    location: { type: String },
    skills: [String],
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
    friends: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

const UserData = mongoose.model("UserData", UserDataSchema);

module.exports = UserData;
