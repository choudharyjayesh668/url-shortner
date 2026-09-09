const express=require("express");
const router = express.Router();

const {
    createShortUrl,
    redirectToOriginalUrl
} = require("../controllers/urlController");

const urlLimiter = require("../middleware/rateLimiter");

router.post("/url", urlLimiter, createShortUrl);

router.get("/:shortId", redirectToOriginalUrl);

module.exports = router;