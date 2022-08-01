const stripe = require('stripe')(process.env.STRIPE_KEY);

const stripePayment = (req, res, next) => {
    stripe.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: 'usd'
    }, (stripeErr, stripeRes) => {
        if (stripeErr) {
            next(stripeErr);
        } else {
            res.status(200).json(stripeRes);
        }
    });
}

module.exports = stripePayment;