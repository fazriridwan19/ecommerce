const stripePayment = require('../controllers/payment');

const router = require('express').Router();

router.route('/stipe').post(stripePayment);

module.exports = router;