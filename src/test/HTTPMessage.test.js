var sinon = require('sinon');
var assert = require('chai').assert;
var HTTPMessage = require('../lib/HTTPMessage')

suite('HTTPMessage', function(){
    var sut;
    var headers;

    var messageData;
    setup(function(){
        messageData = {
            request: {method: 'POST', path: '/some/path'},
            headers: {'some-header': 'some-value'}
        };
        sut = new HTTPMessage(messageData);
    });

    suite('#render', function(){
        test('First Line should be a Request containing POST /some/path HTTP/1.0', function(){
            var msg = sut.render();

            var lines = msg.split(sut.endline);
            assert.equal(lines[0], 'POST /some/path HTTP/1.0', 'Correctly formatted request line');
        });
        test('First Line should be a Request containing GET /another/path HTTP/1.0', function(){
            sut.setRequest('GET', '/another/path');
            var msg = sut.render();

            var lines = msg.split(sut.endline);
            assert.equal(lines[0], 'GET /another/path HTTP/1.0', 'Correctly formatted request line');
        });
        test('Headers should start at the second line', function() {
            var msg = sut.render();
            var lines = msg.split(sut.endline);
            assert.equal(lines[1], 'some-header: some-value', 'Correctly formatted header line');
        });
    });
});