// Estimate waiting time (in minutes)
const estimateWaitingTime = (
    tokenNumber,
    currentServing,
    averageTime = 5
) => {

    if (tokenNumber <= currentServing) {
        return 0;
    }

    return (tokenNumber - currentServing) * averageTime;

};

module.exports = estimateWaitingTime;