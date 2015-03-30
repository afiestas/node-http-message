function HTTPMessage (message) {
    var pojoMessage = message || {};
    var request = pojoMessage.request || {};

    this.method = request.method || 'not set';
    this.path = request.path || '/path/not/set';

    this.headers = pojoMessage.headers || {};
    this.version = 'HTTP/1.0';
    this.endline = '\n';
}

HTTPMessage.prototype.setRequest = function(method, path) {
    this.method = method;
    this.path = path;
};

HTTPMessage.prototype.setHeaders = function(headers) {
    this.headers = headers;
};

HTTPMessage.prototype.setBody = function(body) {
    this.body = body;
};

HTTPMessage.prototype.render = function() {
    var msg = this.method + ' ' + this.path + ' ' + this.version + this.endline;
    for (var header in this.headers) {
        msg += header + ': ' + this.headers[header] + this.endline;
    }

    if (this.body) {
        msg += 'Content-Length: ' + Buffer.byteLength(this.body) + this.endline;
    }

    msg += this.endline;

    if (this.body) {
        msg += this.body;
    }
    return msg;
};

module.exports = HTTPMessage;
