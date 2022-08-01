const User = require('../models/User');
const asyncWrapper = require('../middlewares/async');
const CryptoJS = require('crypto-js');
const { makeCustomError } = require('../errors/error');
const jwt = require('jsonwebtoken');

const register = asyncWrapper(async (req, res) => {
    req.body.password = CryptoJS.SHA256(req.body.password.toString()).toString(CryptoJS.enc.Base64);
    
    const user = await User.create(req.body);
    res.status(201).json({
        status: 'Success',
        user
    });
});

const login = asyncWrapper(async (req, res, next) => {
    const hashedPassword = CryptoJS.SHA256(req.body.password.toString()).toString(CryptoJS.enc.Base64);

    const user = await User.findOne({
        username: req.body.username, 
        password: hashedPassword
    });
    if (!user) {
        return next(makeCustomError('Invalid username or password', 401));
    }
    const accessToken = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_KEY, { expiresIn: '1h' });
    const refreshToken = jwt.sign({ id: user._id }, process.env.JWT_KEY, { expiresIn: '1d' });

    res.status(200).json({
        userId: user._id,
        accessToken,
        refreshToken
    });
});

module.exports = {
    register,
    login
}