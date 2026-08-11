const express = require("express");
const cors = require("cors");

const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");
const queueRoutes = require("./routes/queueRoutes");

const app = express();
const allowedOrigins = [
"http://localhost:5173",
"http://127.0.0.1:5173",
process.env.FRONTEND_URL
].filter(Boolean);

// CORS setup (allow frontend)
app.use(cors({
origin(origin, callback) {
if (!origin || allowedOrigins.includes(origin)) {
return callback(null, true);
}

return callback(new Error("Origin not allowed by CORS"));
},
credentials: true
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(logger);

// Test route
app.get("/", (req, res) => {
res.send("Virtual Queue Backend Running");
});

// API routes
app.use("/api/queue", queueRoutes);

// 404 handler
app.use((req, res) => {
res.status(404).json({
success: false,
message: "Route Not Found"
});
});

// Error handler
app.use(errorHandler);

module.exports = app;
