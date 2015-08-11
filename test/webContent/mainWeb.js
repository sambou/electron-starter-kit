var assert = require('assert');
var mainWeb = require('../../src/webContent/mainWeb.js');
var sinon = require('sinon');

describe('mainWeb module', function() {

    var mw, ipc = {};

    it('should send the ipc event "async-test-request"', function() {
        ipc.send = sinon.stub();
        ipc.on = sinon.stub();

        mw = mainWeb({ipc: ipc});

        assert(ipc.send.calledWith("async-test-request"));
    });

});
