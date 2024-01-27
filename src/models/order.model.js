import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    food: [
      {
        type: mongoose.Schema.ObjectId,
        ref: "Food",
      },
    ],

    payment: {},
    buyer: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
    status: {
      type: String,
      enm: ["Preparing", "Prepare", "On the Way", "Delivered"],
      default: "Preparing",
    },
  },
  { timestamps: true }
);

export const Order = new mongoose.model("Order", orderSchema);
