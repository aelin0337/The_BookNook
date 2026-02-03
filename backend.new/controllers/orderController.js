import mongoose from "mongoose";
import Order from "../models/Order.js";
import Book from "../models/Book.js"; 

export const getMyOrders = async (req, res) => {
  try {
    res.set('Cache-Control', 'no-store');

    const orders = await Order.find({ userId: req.user._id })
      .populate('items.bookId', 'title author');

    res.json(orders);
  } catch (error) {
    res.status(500).json({
      message: "Error getting user orders",
      error: error.message,
    });
  }
};

export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({
      message: "Error getting orders",
      error: error.message,
    });
  }
};

export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({
      message: "Error getting order",
      error: error.message,
    });
  }
};
export const createOrder = async (req, res) => {
  try {
    const userId = req.user._id;
    const { items, totalAmount } = req.body;

    if (!items || !items.length) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    const order = new Order({
      userId,
      items,
      totalAmount,
      status: "pending",
    });

    await order.save();
    res.status(201).json(order);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to create order" });
  }
};

export const deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);

    if (!order) {
      return res.status(404).json({
        message: "Order not found",
      });
    }

    res.json({
      message: "Order deleted",
      orderId: order._id,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting order",
      error: error.message,
    });
  }
};