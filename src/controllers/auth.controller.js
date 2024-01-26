import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const registerController = async (req, res) => {
  try {
    const { userName, email, password, address, phone } = req.body;

    if (!userName || !email || !password || !address || !phone) {
      return res.status(401).send({
        success: false,
        massage: "Please provide all field",
      });
    }

    const exitingUser = await User.findOne({ email });

    if (exitingUser) {
      return res.status(401).send({
        success: false,
        massage: "Email already registered please login",
      });
    }

    const slat = bcrypt.genSaltSync(10);
    const hashPassword = await bcrypt.hash(password, slat);

    const newUser = await User.create({
      userName,
      email,
      password: hashPassword,
      address,
      phone,
    });

    res.status(201).send({
      success: true,
      massage: "User has been created",
      data: newUser,
    });
  } catch (error) {
    console.log("Error when registering the user", error);
    res.status(500).send({
      success: false,
      massage: "Error when register the user",
      error,
    });
  }
};

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).send({
        success: false,
        massage: "Please provide email or password",
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).send({
        success: false,
        massage: "User is not found",
      });
    }
    const isMatchPassword = await bcrypt.compare(password, user.password);

    if (!isMatchPassword) {
      return res.status(401).send({
        success: false,
        massage: "Invalid credential",
      });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    user.password = undefined;

    res.status(200).send({
      success: true,
      message: "User login successful",
      data: user,
      token,
    });
  } catch (error) {
    console.log("Error when login the user", error);
    res.status(500).send({
      success: false,
      massage: "Error when login the user",
      error,
    });
  }
};

export { registerController, loginController };
