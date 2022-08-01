const { createCart, updateCart, deleteCart, getUserCart, getCarts } = require('../controllers/cart');
const { verifyToken, verifyTokenAndAuthorize, verifyTokenAndAdmin } = require('../middlewares/verifyToken');

const router = require('express').Router();

router
    .route('/')
    .post(verifyToken, createCart)
    .get(verifyTokenAndAdmin, getCarts);
router
    .route('/:id')
    .patch(verifyTokenAndAuthorize, updateCart)
    .delete(verifyTokenAndAuthorize, deleteCart);
router
    .route('/user/:userId')
    .get(verifyTokenAndAuthorize, getUserCart);

module.exports = router;