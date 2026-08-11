const {
    getCounters,
    assignToken
} = require("../services/counterService");

const {
    sendNotification
} = require("../services/notificationService");

const {
    queue,
    addToken,
    removeFirst,
    clearQueue
} = require("../services/queueService");

const estimateWaitingTime = require("../utils/waitTime");
const { success, failure } = require("../utils/response");

let currentServing = 0;
let nextTokenNumber = 1;
let currentServingToken = null;
let completedTokens = 0;

// CREATE TOKEN
const takeToken = (req, res) => {

    const io = req.app.get("io");

    const {
        name,
        priority = "normal"
    } = req.body;

    const token = {
        tokenNumber: nextTokenNumber++,
        name,
        priority,
        status: "waiting",
        counterId: null,
        estimatedWait: estimateWaitingTime(
            nextTokenNumber - 1,
            currentServing
        )
    };

    // Emergency -> VIP -> Normal
    if (priority === "emergency") {

        queue.unshift(token);

    } else if (priority === "vip") {

        const index = queue.findIndex(
            q => q.priority === "normal"
        );

        if (index === -1) {
            queue.push(token);
        } else {
            queue.splice(index, 0, token);
        }

    } else {

        addToken(token);

    }

    if (io) {
        io.emit("tokenCreated", token);
        io.emit("queueUpdated", queue);
    }

    return success(res, "Token Created Successfully", token, 201);
};

// GET QUEUE
const getQueue = (req, res) => {

    return success(res, "Queue fetched", {

        currentServing,

        currentToken: currentServingToken,

        total: queue.length,

        queue

    });

};

// SERVE NEXT
const serveNext = (req, res) => {

    const io = req.app.get("io");

    if (currentServingToken) {
        return failure(res, "Complete the current token before calling the next one", 409);
    }

    if (queue.length === 0) {
        return failure(res, "Queue Empty");
    }

    const served = removeFirst();

    served.status = "serving";

    currentServing = served.tokenNumber;
    currentServingToken = served;

    if (io) {
        io.emit("tokenServing", served);
        io.emit("queueUpdated", queue);
    }

    return success(res, "Serving Next Token", served);

};

// ASSIGN COUNTER
const assignCounter = (req, res) => {

    const io = req.app.get("io");

    const {

        tokenNumber,

        counterId

    } = req.body;

    const token = queue.find(
        q => q.tokenNumber === Number(tokenNumber)
    );

    if (!token) {
        return failure(res, "Token Not Found", 404);
    }

    const counter = assignToken(counterId, token);

    if (!counter) {
        return failure(res, "Counter Not Found", 404);
    }

    token.counterId = counterId;
    token.status = "serving";

    sendNotification(
        `Token ${token.tokenNumber} please proceed to Counter ${counterId}`
    );

    if (io) {
        io.emit("counterUpdated", getCounters());
        io.emit("queueUpdated", queue);
    }

    return success(res, "Counter Assigned Successfully", token);

};

// CANCEL TOKEN
const cancelToken = (req, res) => {

    const io = req.app.get("io");

    const tokenNumber = Number(req.params.tokenNumber);

    const index = queue.findIndex(
        t => t.tokenNumber === tokenNumber
    );

    if (index === -1) {
        return failure(res, "Token Not Found", 404);
    }

    const removed = queue.splice(index, 1)[0];

    if (io) {
        io.emit("tokenCancelled", removed);
        io.emit("queueUpdated", queue);
    }

    return success(res, "Token Cancelled Successfully", removed);

};

// COMPLETE TOKEN
const completeToken = (req, res) => {

    const io = req.app.get("io");

    const tokenNumber = Number(req.params.tokenNumber);

    if (!currentServingToken || currentServingToken.tokenNumber !== tokenNumber) {
        return failure(res, "Token Not Found", 404);
    }

    const completed = currentServingToken;

    completed.status = "completed";
    currentServingToken = null;
    completedTokens += 1;

    if (io) {
        io.emit("tokenCompleted", completed);
        io.emit("queueUpdated", queue);
    }

    return success(res, "Token Completed Successfully", completed);

};

// RESET QUEUE
const resetQueue = (req, res) => {

    const io = req.app.get("io");

    clearQueue();

    currentServing = 0;

    currentServingToken = null;

    completedTokens = 0;

    nextTokenNumber = 1;

    if (io) {
        io.emit("queueReset");
        io.emit("queueUpdated", queue);
    }

    return success(res, "Queue Reset Successfully");

};

// SEARCH TOKEN
const searchToken = (req, res) => {

    const tokenNumber = Number(req.params.tokenNumber);

    const token = queue.find(
        q => q.tokenNumber === tokenNumber
    );

    if (!token) {
        return failure(res, "Token Not Found", 404);
    }

    return success(res, "Token Found", token);

};

// QUEUE STATUS
const queueStatus = (req, res) => {

    return success(res, "Queue Status", {

        currentServing,

        totalWaiting: queue.filter(
            q => q.status === "waiting"
        ).length,

        totalServing: currentServingToken ? 1 : 0,

        totalCompleted: completedTokens,

        totalTokens: queue.length + (currentServingToken ? 1 : 0)

    });

};

// COUNTER STATUS
const getCountersStatus = (req, res) => {

    return success(
        res,
        "Counter Status",
        getCounters()
    );

};

module.exports = {

    takeToken,

    getQueue,

    serveNext,

    assignCounter,

    cancelToken,

    completeToken,

    resetQueue,

    searchToken,

    queueStatus,

    getCountersStatus

};
