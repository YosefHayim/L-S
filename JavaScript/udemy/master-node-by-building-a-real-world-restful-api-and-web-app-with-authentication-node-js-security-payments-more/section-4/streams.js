const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  // Solution 1
  // fs.readFile("test-file.txt", (err, data) => {
  //   if (err) console.log(err);
  //   res.end(data);
  // });
  // Solution 2
  // const readable = fs.createReadStream("test-file.txt");
  // readable.on("data", (chunk) => {
  //   res.write(chunk);
  // });
  // readable.on("end", () => {
  //   res.end();
  //   console.log(`Response has ending.`);
  // });
  // how to listen to error event.
  // readable.on("error", (err) => {
  //   console.log(err);
  //   res.statusCode = 500;
  //   console.log("File not found!");
  // });
  // Solution 3
  // const readable = fs.createReadStream("test-file.txt");
  // readable.pipe(res);
  // readableSource.pipe(writeable Destination)
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Listening...");
});