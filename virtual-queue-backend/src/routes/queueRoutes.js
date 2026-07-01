const express = require("express");

const router = express.Router();

const {

    takeToken,

    getQueue,

    serveNext,

    assignCounter

} = require("../controllers/queueController");

const {

    validateToken

} = require("../middleware/validation");

router.post("/token", validateToken, takeToken);

router.get("/", getQueue);

router.post("/serve", serveNext);

router.post("/assign", assignCounter);

module.exports = router;