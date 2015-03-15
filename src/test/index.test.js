var sinon = require('sinon');
var assert = require('chai').assert;
var index = require('../index')
var HTTPMessage = require('../lib/HTTPMessage');

suite('index', function(){
    var sut;

    suite('Exported classes', function(){
        test('HTTPMessage should be correctly exported', function(){
            assert.equal(index.HTTPMessage, HTTPMessage);
        });
    });
});