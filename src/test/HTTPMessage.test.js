var sinon = require('sinon');
var assert = require('chai').assert;
var HTTPMessage = require('../lib/HTTPMessage')

suite('HTTPMessage', function(){
    var sut;

    setup(function(){
        sut = new HTTPMessage();
    });

    suite('#render', function(){
        test('First Line should be a Request containing GET /some/path HTTP/1.0', function(){
            sut.setRequest('GET', '/some/path');
            var msg = sut.render();

            var lines = msg.split(sut.endline);
            assert.equal(lines[0], 'GET /some/path HTTP/1.0', 'Correctly formatted request line');
        });
        test('First Line should be a Request containing POST /another/path HTTP/1.0', function(){
            sut.setRequest('POST', '/another/path');
            var msg = sut.render();

            var lines = msg.split(sut.endline);
            assert.equal(lines[0], 'POST /another/path HTTP/1.0', 'Correctly formatted request line');
        });
    });
});