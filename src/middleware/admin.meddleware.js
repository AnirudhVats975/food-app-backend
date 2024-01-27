import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

export const verifyAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.body.id);
    if (user.userType !== "admin") {
      return res.send(401).send({
        success: false,
        message: "only admin access",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(501).send({
      success: false,
      message: "Un-authorized access",
      error,
    });
  }
};
