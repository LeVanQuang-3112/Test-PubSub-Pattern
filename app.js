// app.js

const pubSub = require('./pubsub.js');

const logData = (data) => {
    console.log(`Nhận data: ${data}`);
};

// Đăng ký một subscriber
pubSub.subscribe('event1', logData);

// Phát hành một sự kiện
pubSub.publish('event1', 'Hello, World!');

// Hủy đăng ký một subscriber
pubSub.unsubscribe('event1', logData);

pubSub.publish('event1', 'This will not be logged');  // Không có output
