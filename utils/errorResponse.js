class ErrorResponse extends Error {
    constructor(message, statusCode) {
        super();
        this.statusCode = statusCode;
    }
}

module.exports = ErrorResponse;