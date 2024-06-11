

let subscribers = {}
module.exports = {

    subscribe(event, callback) {
        if (!subscribers[event]) {
            subscribers[event] = [];
        }
        subscribers[event].push(callback);
    },

    unsubscribe(event, callback) {
        if (!subscribers[event]) return;

        subscribers[event] = subscribers[event].filter(
            subscriber => subscriber !== callback
        );
    },

    publish(event, data) {
        if (!subscribers[event]) return;
        subscribers[event].forEach(subscriberCallback => {
            subscriberCallback(data);
        });
    }
};
