const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Set password for user"],
  },
  avatarURL: { type: String, required: [true, "Upload avatar"] },
  token: { type: String },
  theme: { enum: ["DARK", "LIGHT", "VIOLET"], default: "LIGHT" },
});

const User = model("user", userSchema);

module.exports = User;
