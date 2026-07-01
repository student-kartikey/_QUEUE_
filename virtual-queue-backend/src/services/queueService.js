// In-memory queue storage
const queue = [];

// Get complete queue
const getQueue = () => {
    return queue;
};

// Add a new token
const addToken = (token) => {
    queue.push(token);
    return token;
};

// Remove and return the first token
const removeFirst = () => {
    if (queue.length === 0) {
        return null;
    }

    return queue.shift();
};

// Find a token by token number
const findToken = (tokenNumber) => {
    return queue.find(
        (token) => token.tokenNumber === Number(tokenNumber)
    );
};

// Remove a specific token
const removeToken = (tokenNumber) => {
    const index = queue.findIndex(
        (token) => token.tokenNumber === Number(tokenNumber)
    );

    if (index === -1) {
        return null;
    }

    return queue.splice(index, 1)[0];
};

// Clear the entire queue
const clearQueue = () => {
    queue.length = 0;
};

module.exports = {
    queue,
    getQueue,
    addToken,
    removeFirst,
    findToken,
    removeToken,
    clearQueue
};