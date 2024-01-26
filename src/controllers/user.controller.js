import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";

const getUserUserController = async (req, res) => {
  try {
    const user = await User.findById({ _id: req.body.id });

    if (!user) {
      res.status(401).send({
        success: false,
        massage: "user not  found",
      });
    }

    user.password = undefined;

    res.status(200).send({
      success: true,
      massage: "user data fetch successful",
      data: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      massage: "Error when fetch user data",
      error,
    });
  }
};

const updateController = async (req, res) => {
  try {
    const user = await User.findById({ _id: req.body.id });
    if (!user) {
      res.status(401).send({
        success: false,
        massage: "user not  found",
      });
    }
    const { userName, address, phone } = req.body;
    if (userName) user.userName = userName;
    if (phone) user.phone = phone;
    if (address) user.address = address;

    const updatedUser = await user.save();

    res.status(200).send({
      success: true,
      massage: "user data update successful",
      data: updatedUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      massage: "Error when update user",
      error,
    });
  }
};

const updatePasswordController = async (req, res) => {
  try {
    const user = await User.findById({ _id: req.body.id });
    if (!user) {
      res.status(401).send({
        success: false,
        massage: "user not  found",
      });
    }

    const { oldPassword, newPassword } = req.body;

    if (!oldPassword || !newPassword) {
      res.status(401).send({
        success: false,
        massage: "all filed are required",
      });
    }

    const isMatchPassword = await bcrypt.compare(oldPassword, user.password);

    if (!isMatchPassword) {
      return res.status(401).send({
        success: false,
        massage: "Invalid old password",
      });
    }
    const slat = bcrypt.genSaltSync(10);
    const hashPassword = await bcrypt.hash(newPassword, slat);
    user.password = hashPassword;

    const updatedPassword = await user.save();

    res.status(200).send({
      success: true,
      massage: "password updated",
      data: updatedPassword,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      massage: "Error when update password",
      error,
    });
  }
};

const deleteUserController = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    return res.status(200).send({
      success: true,
      message: "Your account has been deleted",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error when deleting user",
      error: error.message,
    });
  }
};

export {
  getUserUserController,
  updateController,
  updatePasswordController,
  deleteUserController,
};
