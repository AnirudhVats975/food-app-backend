import { Order } from "../models/order.model.js";

const placeOrderController = async (req, res) => {
  try {
    const { cart, payment } = req.body;

    if (!cart || !payment) {
      return res.status(401).send({
        success: false,
        massage: "Please add food in cart and payment method",
      });
    }

    let total = 0;
    cart.map((item) => {
      total += item.price;
    });

    const order = new Order({
      food: cart,
      payment: total,
      buyer: req.body.id,
    });

    const newOrder = await order.save();

    return res.status(200).send({
      success: true,
      message: "New order has been Created",
      data: newOrder,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error when create order",
      error: error.message,
    });
  }
};

const orderStatusController = async (req, res) => {
  try {
    const orderId = req.params.id;

    if (!orderId) {
      return res.status(401).send({
        success: false,
        massage: "Please Provide a valid order Id",
      });
    }

    const { status } = req.body;
    const updatedOrder = await Order.findByIdAndUpdate(
      orderId,
      { status },
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(401).send({
        success: false,
        massage: "No order is associated with id",
      });
    }

    return res.status(200).send({
      success: true,
      message: "Order has been updated",
      data: updatedOrder,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error when order status change",
      error: error.message,
    });
  }
};

export { placeOrderController, orderStatusController };
