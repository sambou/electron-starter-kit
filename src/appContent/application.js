var ipc = require('ipc');

var application = function() {

    ipc.on('async-test-request', function(event, arg) {
        event.sender.send('async-test-response', 'Hi there!');
    });

};

module.exports = application;
