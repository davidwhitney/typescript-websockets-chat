
var ws = new WebSocket("wss://" + window.location.host);

const chatForm = document.getElementById("chatui") as HTMLInputElement;
const sendMessageButton = document.getElementById("send") as HTMLInputElement;
const nameTextbox = document.getElementById("name") as HTMLInputElement;
const messageTextbox = document.getElementById("message") as HTMLInputElement;
const messagesLog = document.getElementById("messages") as HTMLInputElement;
const chatUi = [ chatForm, sendMessageButton, nameTextbox, messageTextbox, messagesLog ];

 ws.onopen = function() {
   for (let ui of chatUi) {
     ui.disabled = false;
   }
   messageTextbox.focus();
 };

 ws.onmessage = function (evt) { 
   const unpacked = JSON.parse(evt.data);
   messagesLog.value += `${unpacked.name}: ${unpacked.message}\r\n\r\n`;
 };

 ws.onclose = function() {
   for (let ui of chatUi) {
     ui.disabled = true;
   }
 };

const sendMessage = (event) => {
  const payload = {
    name: nameTextbox.value,
    message: messageTextbox.value
  };
  
  ws.send(JSON.stringify(payload));
  
  messageTextbox.value = "";
  messageTextbox.focus();
  event.preventDefault();
};

chatForm.addEventListener("submit", sendMessage);