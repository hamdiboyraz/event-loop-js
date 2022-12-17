const EventEmitter = require("events");
const http = require("http");

//const myEmitter = new EventEmitter();

// instead of using above, we create Sales class(child/sub/derived) inherits/extends EventEmitter class(parent/super/base).
class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new Sales();

// Theese all event listeners that contain callback function.
// We can set up multiple event listeners for the same event
// on -> observers. They observe the emitter
myEmitter.on("newSale", () => {
  console.log("There was a new sale!");
});

myEmitter.on("newSale", () => {
  console.log("Customer name: Hamdi");
});

myEmitter.on("newSale", (stock) => {
  console.log(`There are now ${stock} items left in stock.`);
});

// Event emitter
// emit-> object that emits the event
// Also, emitter can emit other events.
// We can pass argument to event listeners(in this case, 9).
myEmitter.emit("newSale", 9);

////////////////////
console.log("-".repeat(20));

const server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request received!");
  console.log(req.url);
  res.end("Request received");
});

server.on("request", (req, res) => {
  console.log("Request received");
});

server.close("close", () => {
  console.log("Server closed!");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Waiting for request...");
});
