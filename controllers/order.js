const asyncWrapper = require('../middlewares/async');
const { makeCustomError } = require('../errors/error');
const Order = require('../models/Order');

const createOrder = asyncWrapper(async (req, res) => {
    const order = await Order.create(req.body);
    res.status(201).json({ message: 'Order created', orderId: order._id });
});

const updateOrder = asyncWrapper(async (req, res, next) => {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });
    if (!order) {
        return next(makeCustomError(`No order with id ${req.params.id}`, 404));
    }
    res.status(200).json({ message: 'Order updated', orderId: order._id });
});

const deleteOrder = asyncWrapper(async (req, res, next) => {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) {
        return next(makeCustomError(`No order with id ${req.params.id}`, 404))
    }
    res.status(200).json({ message: 'Order deleted' })
});

// GET USER ORDER
const getUserOrders = asyncWrapper(async (req, res, next) => {
    const orders = await Order.findOne({ userId: req.params.userId });
    if (!orders) {
        return next(makeCustomError(`No orders with id ${req.params.id}`, 404));
    }
    res.status(200).json(orders);
});

// GET ALL ORDERS
const getOrders = asyncWrapper(async (req, res) => {
    const orders = await Order.find();
    res.status(200).json(orders);
});

// GET MONTHLY INCOME
const getIncome = asyncWrapper(async (req, res) => {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

    const income = await Order.aggregate([
        { $match: { createdAt: { $gte: previousMonth } } },
        {
            $project: {
                month: { $month: "$createdAt" },
                sales: "$amount"
            }
        },
        {
            $group: {
                _id: "$month",
                total: { $sum: "$sales" }
            }
        }
    ]);
    res.status(200).json(income);
});

module.exports = {
    createOrder,
    updateOrder,
    deleteOrder,
    getUserOrders,
    getOrders,
    getIncome
}