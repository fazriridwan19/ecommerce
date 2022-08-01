class CustomError extends Error {
    constructor(msg, status) {
        super(msg);
        this.statusCode = status;
    }
}

const makeCustomError = (msg, status) => {
    return new CustomError(msg, status);
}

module.exports = { CustomError, makeCustomError }