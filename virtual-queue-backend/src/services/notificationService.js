// Send notification (currently logs to console)
// Can later be replaced with Email, SMS, Push Notification, or WhatsApp APIs.

const sendNotification = (message) => {

    try {

        console.log("🔔 NOTIFICATION:", message);

        return {
            success: true,
            message: "Notification Sent"
        };

    } catch (error) {

        console.error("Notification Error:", error.message);

        return {
            success: false,
            message: "Notification Failed"
        };

    }

};

module.exports = {
    sendNotification
};