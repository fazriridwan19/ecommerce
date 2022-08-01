require('dotenv').config();
const express = require('express');
const app = express();
const connection = require('./db/connection');
const authRouter = require('./routes/auth');
const userRouter = require('./routes/user');
const cartRouter = require('./routes/cart');
const orderRouter = require('./routes/order');
const productRouter = require('./routes/product');
const paymentRouter = require('./routes/payment');
const errorHandler = require('./middlewares/error');
const port = process.env.PORT || 5000;
const startServer = async () => {
    try {
        await connection(process.env.MONGO_URI);
        console.log('Connect to DB successfully');
        app.listen(port, console.log(`Running on port ${port}`));
    } catch (error) {
        console.log(error);
    }
}

app.use(express.json());
app.use('/api/auth', authRouter)
app.use('/api/users', userRouter)
app.use('/api/products', productRouter)
app.use('/api/carts', cartRouter)
app.use('/api/orders', orderRouter)
app.use('/api/payments', paymentRouter)
app.use(errorHandler)
app.use((req, res) => res.status(404).send('<h1>404</h1>'))
startServer();