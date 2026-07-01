const { failure } = require("../utils/response");

const validateToken = (req, res, next) => {

    const { name, priority } = req.body;

    // Name validation
    if (!name) {
        return failure(res, "Name is required", 400);
    }

    if (typeof name !== "string") {
        return failure(res, "Name must be a string", 400);
    }

    if (name.trim().length < 2) {
        return failure(
            res,
            "Name should contain at least 2 characters",
            400
        );
    }

    // Priority validation (optional)
    if (
        priority &&
        !["normal", "vip", "emergency"].includes(priority)
    ) {
        return failure(
            res,
            "Priority must be normal, vip or emergency",
            400
        );
    }

    next();
};

module.exports = {
    validateToken
};