const { CustomError } = require('../errors/error');
module.exports = (err, req, res, next) => {
    if (err instanceof CustomError) {
        return res.status(err.statusCode).json({ message: err.message });
    }
    return res.status(500).json({ ...err });
} 