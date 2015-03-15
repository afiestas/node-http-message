[![Build Status](https://travis-ci.org/afiestas/node-http-message.svg?branch=master)](https://travis-ci.org/afiestas/node-http-message)
# node-http-message
Small library to create HTTP Messages.

## What is supported
At this moment only http 1.0 is supported.
We do *not* do any sanity checks on the values passed to HTTPMessage, so it might happen that you end up with
GET request containing a body, or headers with the same name (Javascript is case sensitive while HTTP is not).

##Syntax
```javascript
var HTTPMessage = require('http-message');
var msg = new HTTPMessage();
msg.setRequest("POST", "/some/path");
msg.setHeaders({"Connection": "Close", "Accept": "*/*"});
msg.setBody("MyBody");
var httpMessage = msg.render();
```
