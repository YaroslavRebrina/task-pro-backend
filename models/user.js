const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  username: { type: String, required: [true, "Username is required"] },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Set password for user"],
  },
  avatarURL: { type: String },
  token: { type: String },
  theme: { type: String, enum: ["DARK", "LIGHT", "VIOLET"], default: "LIGHT" },
});

const User = model("user", userSchema);

module.exports = User;
