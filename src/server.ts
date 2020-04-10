const express = require("express");
const path = require("path");
import * as WebSocket from 'ws';
import * as http from 'http';

const app = express();

app.use(express.static(path.join(__dirname, "/dist"))); // TypeScript output compiled to here.
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (request, response)  => {
  response.sendFile(__dirname + "/views/index.html");
});

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws: WebSocket) => {
    ws.on('message', (message: string) => {
        wss.clients.forEach(client => {
          client.send(message);
        });      
    });
});

const listener = server.listen(process.env.PORT, function() {
  console.log("Your app is listening on " + process.env.PORT);
});