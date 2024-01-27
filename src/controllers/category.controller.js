import { Category } from "../models/category.model.js";

const createCategoryController = async (req, res) => {
  try {
    const { title, imgUrl } = req.body;

    if (!title) {
      return res.status(401).send({
        success: false,
        massage: "please provide the category title",
      });
    }

    const newCategory = await Category.create({
      title,
      imgUrl,
    });

    res.status(200).send({
      success: true,
      massage: "category created successfully",
      data: newCategory,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error when get create category",
      error: error.message,
    });
  }
};

const getAllCategoryController = async (req, res) => {
  try {
    const fetchCategory = await Category.find({});

    if (!fetchCategory) {
      return res.status(401).send({
        success: false,
        massage: "No category found",
      });
    }

    res.status(200).send({
      success: true,
      massage: "All category fetch successfully",
      data: fetchCategory,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error when fetch categories",
      error: error.message,
    });
  }
};

const updateCategoryByIdController = async (req, res) => {
  try {
    const { title, imgUrl } = req.body;
    const { id } = req.params;

    if (!id) {
      return res.status(401).send({
        success: false,
        massage: "Please provide the id",
      });
    }

    const updateCategory = await Category.findByIdAndUpdate(
      id,
      {
        title,
        imgUrl,
      },
      { new: true }
    );

    res.status(200).send({
      success: true,
      massage: "Category update successfully",
      data: updateCategory,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error when update categories",
      error: error.message,
    });
  }
};

const deleteCategoryController = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(401).send({
        success: false,
        massage: "Please provide the id",
      });
    }

    const deletedCategory = await Category.findByIdAndDelete(id);

    if (!deletedCategory) {
      return res.status(401).send({
        success: false,
        massage: "No category is associated with this id",
      });
    }
    return res.status(200).send({
      success: true,
      message: "Category has been deleted",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error when deleting category",
      error: error.message,
    });
  }
};

export {
  createCategoryController,
  getAllCategoryController,
  updateCategoryByIdController,
  deleteCategoryController,
};
