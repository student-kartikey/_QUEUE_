// In-memory counter storage
const counters = [
    {
        id: 1,
        status: "free",
        currentToken: null
    },
    {
        id: 2,
        status: "free",
        currentToken: null
    },
    {
        id: 3,
        status: "free",
        currentToken: null
    }
];

// Get all counters
const getCounters = () => {
    return counters;
};

// Assign a token to a counter
const assignToken = (counterId, token) => {

    const counter = counters.find(
        c => c.id === Number(counterId)
    );

    if (!counter) {
        return null;
    }

    if (counter.status === "busy") {
        return null;
    }

    counter.status = "busy";
    counter.currentToken = token;

    return counter;
};

// Release a counter
const releaseCounter = (counterId) => {

    const counter = counters.find(
        c => c.id === Number(counterId)
    );

    if (!counter) {
        return null;
    }

    counter.status = "free";
    counter.currentToken = null;

    return counter;
};

// Get one counter
const getCounterById = (counterId) => {

    return counters.find(
        c => c.id === Number(counterId)
    );

};

module.exports = {

    getCounters,

    assignToken,

    releaseCounter,

    getCounterById

};