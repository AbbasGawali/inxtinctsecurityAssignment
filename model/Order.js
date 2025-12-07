import mongoose, { mongo } from "mongoose";

const orderSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  orderDate: {
    type: Date,
    required: true,
  },
});

const Order = new mongoose.model("Order", orderSchema);
export default Order;
