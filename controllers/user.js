const asyncWrapper = require('../middlewares/async');
const User = require('../models/User');
const CryptoJS = require('crypto-js');
const { makeCustomError } = require('../errors/error');

const getUsers = asyncWrapper(async (req, res) => {
    const query = req.query.new;
    const users = query ? await User.find().sort({ createdAt: -1 }).limit(1) : await User.find();
    res.status(200).json(users);
});

const getUser = asyncWrapper(async (req, res, next) => {
    const user = await User.findById(req.params.id);
    if (!user) {
        return next(makeCustomError(`No user with id ${req.params.id}`, 404));
    }
    res.status(200).json(user);
});

const getUserStats = asyncWrapper(async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

    const data = await User.aggregate([
        { $match: { createdAt: { $gte: lastYear } } },
        {
            $project: {
                month: { $month: '$createdAt' }
            }
        },
        {
            $group: {
                _id: '$month',
                total: { $sum: 1 }
            }
        }
    ]);

    res.status(200).json(data);
});

const updateUser = asyncWrapper(async (req, res, next) => {
    if (req.body.password) {
        req.body.password = CryptoJS.SHA256(req.body.password.toString()).toString(CryptoJS.enc.Base64);
    }
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })
    if (!user) {
        return next(makeCustomError(`No user with id ${req.params.id}`, 404));
    }
    res.status(200).json({ message: 'User updated', userId: user._id });
});

const deleteUser = asyncWrapper(async (req, res, next) => {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
        return next(makeCustomError(`No user with id ${req.params.id}`, 404))
    }
    res.status(200).json({ message: 'User deleted' })
})
module.exports = {
    getUsers,
    getUser,
    getUserStats,
    updateUser,
    deleteUser,
}