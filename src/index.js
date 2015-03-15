var HTTPMessage = require('./lib/HTTPMessage');

var getHTTPMessage = function getHTTPMessage() {
    return new HTTPMessage();
};

module.exports = {
    HTTPMessage: HTTPMessage,
    getHTTPMessage: getHTTPMessage
};