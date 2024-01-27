import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Category title is required"],
    },

    imgUrl: {
      type: String,
      default:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vectors%2Ffood-logo-vectors&psig=AOvVaw3srr05nBnCP6FynYshF0UB&ust=1706390339818000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKCAusP9-4MDFQAAAAAdAAAAABAt",
    },
  },
  { timestamps: true }
);

export const Category = new mongoose.model("Category", categorySchema);
