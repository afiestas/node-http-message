var HTTPMessage = require('./lib/HTTPMessage');

var getHTTPMessage = function getHTTPMessage(message) {
    return new HTTPMessage(message);
};

module.exports = {
    HTTPMessage: HTTPMessage,
    getHTTPMessage: getHTTPMessage
};