const MessageHub = require('message-hub-rest');
const openwhisk = require('openwhisk');

function main(args) {
    var ow = openwhisk();
    console.log();
    console.log("I am a debug message");
    return {payload: 'Hello world'};
}

exports.main = main;
