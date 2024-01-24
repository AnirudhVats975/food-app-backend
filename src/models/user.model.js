import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "User Name is required"],
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },

    password: {
      type: String,
      required: [true, "Password is required"],
    },

    address: {
      type: Array,
    },

    userType: {
      type: String,
      required: [true, "User type is required"],
      default: "client",
      enm: ["client", "admin", "vender"],
    },

    profile: {
      type: String,
      default:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fkacrm.datamaticsbpm.com%2Fassets%2Fimages%2Fusers%2F&psig=AOvVaw3KnOstqCwdUUBN3rKE8oNc&ust=1706177144376000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCIiB0qfj9YMDFQAAAAAdAAAAABAQ",
    },
  },
  { timestamps: true }
);

module.exports = new mongoose.model("User", userSchema);
