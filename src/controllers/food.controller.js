import { Food } from "../models/food.model.js";

const createFoodController = async (req, res) => {
  try {
    const {
      title,
      description,
      price,
      imgUrl,
      foodTags,
      code,
      isAvailable,
      category,
      restaurant,
      rating,
      ratingCount,
    } = req.body;

    if (!title || !description || !price || !category || !restaurant) {
      return res.status(401).send({
        success: false,
        massage: "please provide all field",
      });
    }

    const newFood = await Food.create({
      title,
      description,
      price,
      imgUrl,
      foodTags,
      code,
      isAvailable,
      category,
      restaurant,
      rating,
      ratingCount,
    });

    res.status(200).send({
      success: true,
      massage: "Food added successfully",
      data: newFood,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error when get create food",
      error: error.message,
    });
  }
};

const getAllFoodController = async (req, res) => {
  try {
    const fetchFood = await Food.find({});

    if (!fetchFood) {
      return res.status(401).send({
        success: false,
        massage: "No food item Found",
      });
    }
    res.status(200).send({
      success: true,
      massage: "Food items fetch successfully",
      data: fetchFood,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error when get create food",
      error: error.message,
    });
  }
};

const getSingleFoodController = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(401).send({
        success: false,
        massage: "Please provide id for fetch food",
      });
    }
    const fetchSingleFood = await Food.findById(id);

    if (!fetchSingleFood) {
      return res.status(401).send({
        success: false,
        massage: "No food item Found to with this id",
      });
    }
    res.status(200).send({
      success: true,
      massage: "Food items fetch successfully",
      data: fetchSingleFood,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error when fetch  single food item",
      error: error.message,
    });
  }
};

const getByRestaurantController = async (req, res) => {
  try {
    const restaurantId = req.params.id;
    if (!restaurantId) {
      return res.status(401).send({
        success: false,
        massage: "Please provide id for fetch food",
      });
    }
    const fetchFoodByRestaurant = await Food.find({
      restaurant: restaurantId,
    });

    if (!fetchFoodByRestaurant) {
      return res.status(401).send({
        success: false,
        massage: "No food item Found to with this restaurant",
      });
    }
    res.status(200).send({
      success: true,
      massage: "Food base on restaurant fetch successfully",
      data: fetchFoodByRestaurant,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error when get fetching food by restaurant",
      error: error.message,
    });
  }
};

const updateFoodByIdController = async (req, res) => {
  try {
    const foodId = req.params.id;
    const {
      title,
      description,
      price,
      imgUrl,
      foodTags,
      code,
      isAvailable,
      category,
      restaurant,
      rating,
      ratingCount,
    } = req.body;

    if (!foodId) {
      return res.status(401).send({
        success: false,
        massage: "Please provide the food Item id",
      });
    }
    const updatedFood = await Food.findByIdAndUpdate(
      foodId,
      {
        title,
        description,
        price,
        imgUrl,
        foodTags,
        code,
        isAvailable,
        category,
        restaurant,
        rating,
        ratingCount,
      },
      { new: true }
    );

    res.status(200).send({
      success: true,
      massage: "Food base on restaurant fetch successfully",
      data: updatedFood,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error when update food item",
      error: error.message,
    });
  }
};

const deleteFoodController = async (req, res) => {
  try {
    const foodId = req.params.id;

    if (!foodId) {
      return res.status(401).send({
        success: false,
        massage: "Please Provide Id ",
      });
    }

    const deletedFood = await Food.findByIdAndDelete(foodId);

    if (!deletedFood) {
      return res.status(401).send({
        success: false,
        massage: "No food is associated with this id ",
      });
    }

    return res.status(200).send({
      success: true,
      message: "Food has been deleted",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error when deleting food",
      error: error.message,
    });
  }
};

export {
  createFoodController,
  getAllFoodController,
  getSingleFoodController,
  getByRestaurantController,
  updateFoodByIdController,
  deleteFoodController,
};
