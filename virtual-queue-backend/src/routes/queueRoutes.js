const express = require("express");

const router = express.Router();

const {

    takeToken,

    getQueue,

    serveNext,

    assignCounter,
    cancelToken,
    completeToken,
    resetQueue,
    queueStatus,
    getCountersStatus

} = require("../controllers/queueController");

const {

    validateToken

} = require("../middleware/validation");

router.post("/token", validateToken, takeToken);

router.get("/", getQueue);

router.get("/status", queueStatus);

router.get("/counters", getCountersStatus);

router.post("/serve", serveNext);

router.post("/assign", assignCounter);

router.post("/:tokenNumber/complete", completeToken);

router.delete("/:tokenNumber", cancelToken);

router.post("/reset", resetQueue);

module.exports = router;
