# node-http-message
Small library to create HTTP Messages.

## What is supported
At this moment only http 1.0 is supported.

##Syntax
```javascript
var HTTPMessage = require('http-message');
var msg = new HTTPMessage();
msg.setRequest("POST", "/some/path");
msg.setHeaders({"Connection": "Close", "Accept": "*/*"});
msg.setBody("MyBody");
var httpMessage = msg.render();
```
