import mongoose from "mongoose";

const foodSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Food title is required"],
    },

    description: {
      type: String,
      required: [true, "food description is required"],
    },

    price: {
      type: String,
      required: [true, "food price is required"],
    },

    imgUrl: {
      type: String,
      default:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Flogo.com%2Flogos%2Ffood-logo-maker&psig=AOvVaw2Xhdib0cMPYuYBLg-c8Xpg&ust=1706394538421000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPDZv5eN_IMDFQAAAAAdAAAAABAD",
    },

    foodTags: {
      type: String,
    },

    category: {
      type: String,
    },

    code: {
      type: String,
    },

    isAvailable: {
      type: Boolean,
      default: true,
    },

    category: {
      type: String,
    },

    restaurant: {
      type: mongoose.Schema.ObjectId,
      ref: "Restaurant",
    },

    rating: {
      type: Number,
      default: 5,
      min: 1,
      max: 5,
    },

    ratingCount: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Food = new mongoose.model("Food", foodSchema);
