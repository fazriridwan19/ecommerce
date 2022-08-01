const asyncWrapper = require('../middlewares/async');
const { makeCustomError } = require('../errors/error');
const Cart = require('../models/Cart');

const createCart = asyncWrapper(async (req, res) => {
    const cart = await Cart.create(req.body);
    res.status(201).json({ message: 'Cart created', cartId: cart._id });
});

const updateCart = asyncWrapper(async (req, res, next) => {
    const cart = await Cart.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });
    if (!cart) {
        return next(makeCustomError(`No cart with id ${req.params.id}`, 404));
    }
    res.status(200).json({ message: 'Cart updated', cartId: cart._id });
});

const deleteCart = asyncWrapper(async (req, res, next) => {
    const cart = await Cart.findByIdAndDelete(req.params.id);
    if (!cart) {
        return next(makeCustomError(`No cart with id ${req.params.id}`, 404))
    }
    res.status(200).json({ message: 'Cart deleted' })
});

// GET USER CART
const getUserCart = asyncWrapper(async (req, res, next) => {
    const cart = await Cart.findOne({ userId: req.params.userId });
    if (!cart) {
        return next(makeCustomError(`No cart with id ${req.params.id}`, 404));
    }
    res.status(200).json(cart);
});

// GET ALL CARTS
const getCarts = asyncWrapper(async (req, res) => {
    const carts = await Cart.find();
    res.status(200).json(carts);
});

module.exports = {
    createCart,
    updateCart,
    deleteCart,
    getUserCart,
    getCarts
}