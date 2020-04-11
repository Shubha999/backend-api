// @desc Logs request to console
// Create logging middleware
const logger = (req, res, next) => {
    req.hello = 'Hello';
    console.log('MW ran');
    next();
};

module.exports = logger;