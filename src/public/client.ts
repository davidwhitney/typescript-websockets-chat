
console.log("Hello from client side TypeScript");

var ws = new WebSocket("wss://meteor-loving-gargoyleosaurus.glitch.me/");
				
 ws.onopen = function() {
    ws.send("Message to send");
    console.log("Message is sent...");
 };

 ws.onmessage = function (evt) { 
    var received_msg = evt.data;
    console.log("Message is received...");
 };

 ws.onclose = function() {
    // websocket is closed.
    console.log("Connection is closed..."); 
 };