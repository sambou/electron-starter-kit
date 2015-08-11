var mainWeb = function(spec) {
    var ipc = spec.ipc;

    ipc.send('async-test-request');

    ipc.on('async-test-response', function(response) {
        document.write(response);
        console.log(response);
    });

};

module.exports = mainWeb;
