import { Restaurant } from "../models/restaurant.model.js";

const createRestaurantController = async (req, res) => {
  try {
    const {
      title,
      imgUrl,
      food,
      time,
      pickup,
      delivery,
      isOpen,
      logoUrl,
      rating,
      ratingCount,
      code,
      coords,
    } = req.body;

    const { address } = coords;

    if (!title || !address) {
      res.status(401).send({
        success: false,
        massage: "Please provide title and  address",
      });
    }

    const newRestaurant = await Restaurant.create({
      title,
      imgUrl,
      food,
      time,
      pickup,
      delivery,
      isOpen,
      logoUrl,
      rating,
      ratingCount,
      code,
      coords,
    });

    res.status(201).send({
      success: true,
      massage: "New restaurant has been created",
      data: newRestaurant,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error when creating restaurant",
      error: error.message,
    });
  }
};

const getAllRestaurantController = async (req, res) => {
  try {
    const restaurants = await Restaurant.find({});
    if (!restaurants) {
      res.status(401).send({
        success: false,
        massage: "No restaurants available",
      });
    }

    res.status(201).send({
      success: true,
      massage: "All restaurants are fetch",
      data: restaurants,
      totalCount: restaurants.length,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error when get all restaurant",
      error: error.message,
    });
  }
};

const getRestaurantGetByIdController = async (req, res) => {
  try {
    const restaurantsId = req.params.id;

    if (!restaurantsId) {
      res.status(401).send({
        success: false,
        massage: "Please provide restaurant id",
      });
    }

    const restaurant = await Restaurant.findById(restaurantsId);

    if (!restaurant) {
      res.status(401).send({
        success: false,
        massage: "Restaurant not found",
      });
    }
    res.status(201).send({
      success: true,
      massage: "Restaurant Details is  fetch",
      data: restaurant,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error when get  by id  restaurant",
      error: error.message,
    });
  }
};

const deleteRestaurantGetController = async (req, res) => {
  try {
    const userId = req.params.id;

    if (!userId) {
      res.status(401).send({
        success: false,
        massage: "Please provide a restaurants Id",
      });
    }

    const deletedRestaurant = await Restaurant.findByIdAndDelete(userId);

    if (!deletedRestaurant) {
      return res.status(401).send({
        success: false,
        massage: "No restaurant is associated with this id ",
      });
    }

    res.status(201).send({
      success: true,
      massage: "Restaurant delete successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error when delete restaurant",
      error: error.message,
    });
  }
};

export {
  createRestaurantController,
  getAllRestaurantController,
  getRestaurantGetByIdController,
  deleteRestaurantGetController,
};
