const router = require('express').Router();
const { createProduct, updateProduct, deleteProduct, getProduct, getProducts } = require('../controllers/product');
const { verifyTokenAndAuthorize, verifyTokenAndAdmin } = require('../middlewares/verifyToken');

router
    .route('/')
    .post(verifyTokenAndAdmin, createProduct)
    .get(getProducts);
router
    .route('/:id')
    .patch(verifyTokenAndAdmin, updateProduct)
    .delete(verifyTokenAndAdmin, deleteProduct)
    .get(getProduct);

module.exports = router;