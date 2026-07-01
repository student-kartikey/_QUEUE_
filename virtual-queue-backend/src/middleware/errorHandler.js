const { failure } = require("../utils/response");

const errorHandler = (err, req, res, next) => {

    console.error("ERROR:", err);

    return failure(
        res,
        err.message || "Internal Server Error",
        err.status || 500
    );

};

module.exports = errorHandler;