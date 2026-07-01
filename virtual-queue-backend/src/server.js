const http = require("http");
const { Server } = require("socket.io");

const app = require("./app");

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*"
    }
});

app.set("io", io);

io.on("connection", (socket) => {

    console.log("User Connected:", socket.id);

    socket.emit("connected", {
        message: "Connected Successfully"
    });

    socket.on("disconnect", () => {
        console.log("User Disconnected:", socket.id);
    });

});

const DEFAULT_PORT = Number(process.env.PORT) || 5001;

const startServer = (port) => {
    const onError = (error) => {
        if (error.code === "EADDRINUSE") {
            console.warn(`Port ${port} is busy. Trying ${port + 1}...`);
            server.removeListener("error", onError);
            startServer(port + 1);
            return;
        }

        console.error("Server failed to start:", error);
        process.exit(1);
    };

    server.once("error", onError);

    server.listen(port, () => {
        server.removeListener("error", onError);
        console.log(`🚀 Server running at http://localhost:${port}`);
    });
};

startServer(DEFAULT_PORT);