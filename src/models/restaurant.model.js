import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Restaurant title is required"],
    },

    imgUrl: {
      type: String,
    },

    food: {
      type: Array,
    },

    time: {
      type: String,
    },

    pickup: {
      type: Boolean,
      default: true,
    },

    delivery: {
      type: Boolean,
      default: true,
    },

    isOpen: {
      type: Boolean,
      default: true,
    },

    logoUrl: {
      type: String,
    },

    rating: {
      type: Number,
      min: 1,
      max: 5,
    },

    ratingCount: {
      type: String,
    },

    code: {
      type: String,
    },

    coords: {
      id: { type: String },
      latitude: { type: Number },
      latitudeDelta: { type: Number },
      longitude: { type: Number },
      latitudeDelta: { type: Number },
      address: { type: String },
      title: { type: String },
    },
  },
  { timestamps: true }
);

export const Restaurant = new mongoose.model("Restaurant", restaurantSchema);
