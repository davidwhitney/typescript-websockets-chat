import { ACoolClass } from "./ACoolClass";

console.log("Hello from client side TypeScript");

const instance = new ACoolClass("hi");

const logToConsole = (ourClass: ACoolClass) => {
  console.log(ourClass.Param);
}


logToConsole(instance); // Works fine
// logToConsole("something else"); // Fails at compile time!

var ws = new WebSocket("wss://meteor-loving-gargoyleosaurus.glitch.me/echo");
				
 ws.onopen = function() {
    // Web Socket is connected, send data using send()
    ws.send("Message to send");
    alert("Message is sent...");
 };

 ws.onmessage = function (evt) { 
    var received_msg = evt.data;
    alert("Message is received...");
 };

 ws.onclose = function() {
    // websocket is closed.
    alert("Connection is closed..."); 
 };