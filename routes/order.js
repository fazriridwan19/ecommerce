const { createOrder, updateOrder, deleteOrder, getUserOrders, getOrders, getIncome } = require('../controllers/order');
const { verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorize } = require('../middlewares/verifyToken');

const router = require('express').Router();

router
    .route('/')
    .post(verifyToken, createOrder)
    .get(verifyTokenAndAdmin, getOrders);
router
    .route('/:id')
    .patch(verifyTokenAndAdmin, updateOrder)
    .delete(verifyTokenAndAdmin, deleteOrder);
router
    .route('/user/:userId')
    .get(verifyTokenAndAuthorize, getUserOrders);
router
    .route('/income')
    .get(verifyTokenAndAdmin, getIncome);

module.exports = router;