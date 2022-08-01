const asyncWrapper = require('../middlewares/async');
const { makeCustomError } = require('../errors/error');
const Product = require('../models/Product');

const createProduct = asyncWrapper(async (req, res) => {
    const product = await Product.create(req.body);
    res.status(201).json({ message: 'Product created', productId: product._id });
});

const updateProduct = asyncWrapper(async (req, res, next) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });
    if (!product) {
        return next(makeCustomError(`No product with id ${req.params.id}`, 404));
    }
    res.status(200).json({ message: 'Product updated', productId: product._id });
});

const deleteProduct = asyncWrapper(async (req, res, next) => {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
        return next(makeCustomError(`No product with id ${req.params.id}`, 404))
    }
    res.status(200).json({ message: 'Product deleted' })
});

const getProduct = asyncWrapper(async (req, res, next) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        return next(makeCustomError(`No product with id ${req.params.id}`, 404));
    }
    res.status(200).json(product);
});

const getProducts = asyncWrapper(async (req, res, next) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;

    let products;

    if (qNew && qCategory) {
        products = await Product.find({
            categories: {
                $in: [qCategory]
            }
        }).sort({ createdAt: -1 }).limit(1);
    } else if (qNew) {
        products = await Product.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
        products = await Product.find({
            categories: {
                $in: [qCategory]
            }
        });
    } else {
        products = await Product.find();
    }

    res.status(200).json(products);
});

module.exports = {
    createProduct,
    updateProduct,
    deleteProduct,
    getProduct,
    getProducts
}