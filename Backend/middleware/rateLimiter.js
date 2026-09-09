const rateLimit = require("express-rate-limit");

const urlLimiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 15 minutes
    max: 10, // max 100 requests per IP
    message: {
        message: "Too many requests. Please try again later."
    }
});

module.exports = urlLimiter;