function HTTPMessage (message) {
    var pojoMessage = message || {};
    var request = pojoMessage.request || {};

    this.method = request.method || 'not set';
    this.path = request.path || '/path/not/set';

    this.version = 'HTTP/1.0';
    this.endline = '\n';
}

HTTPMessage.prototype.setRequest = function(method, path) {
    this.method = method;
    this.path = path;
};

HTTPMessage.prototype.render = function() {
    var msg = this.method + ' ' + this.path + ' ' + this.version + this.endline;
    return msg;
};

module.exports = HTTPMessage;