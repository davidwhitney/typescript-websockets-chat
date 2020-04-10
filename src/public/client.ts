
console.log("Hello from client side TypeScript");

var ws = new WebSocket("wss://meteor-loving-gargoyleosaurus.glitch.me/");

const sendMessageButton = document.getElementById("send");
const nameTextbox = document.getElementById("name");
const messageTextbox = document.getElementById("message");
sendMessageButton.addEventListener("click", sendMessage);


 ws.onopen = function() {
   sendMessageButton.disabled = false;
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


const sendMessage = () => {
  console.log("Sending");
  const payload = {
    name: nameTextbox.value,
    message: messageTextbox.value
  };
  
  ws.send(payload);
  
  messageTextbox.value = "";
  
  return false;
};