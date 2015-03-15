function HTTPMessage () {
}

HTTPMessage.prototype.render = function() {
    return "GET /some/path HTTP/1.0\r\n";
};

module.exports = HTTPMessage;