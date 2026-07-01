const express = require("express");
const cors = require("cors");

const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");

const queueRoutes = require("./routes/queueRoutes");

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(logger);

app.get("/", (req, res) => {

    res.send("Virtual Queue Backend Running");

});

app.use("/api/queue", queueRoutes);
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route Not Found"
    });
});
app.use(errorHandler);

module.exports = app;