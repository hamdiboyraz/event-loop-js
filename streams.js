const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  // Solution 1 -> Node will load entire file into memory. When the file is big, node run out our resources. Cause crashes

  //   fs.readFile("test-file.txt", (err, data) => {
  //     if (err) console.log(err);
  //     res.end(data);
  //   });

  // Solution 2: Streams
  //   const readable = fs.createReadStream("test-file.txt");
  //   readable.on("data", (chunk) => {
  //     res.write(chunk);
  //   });
  //   readable.on("end", () => {
  //     res.end(); //->This line important. We must write this. If not, stream will not close and still be waiting for another data
  //   });
  //   readable.on("error", (err) => {
  //     console.log(err);
  //     res.statusCode = 500;
  //     res.end("File not found!");
  //   });

  // Solution 3
  const readable = fs.createReadStream("test-file.txt");
  readable.pipe(res);
  //readableSource.pipe(writeableDest);
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening...");
});
