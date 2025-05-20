const fs = require("fs");
const filename = "example.txt";
const content = "Hello, this is a sample text file!";
// Write content to file
fs.writeFile(filename, content, (err) => {
  if (err) {
    return console.error("Error writing file:", err);
  }
  console.log("File written successfully.");
  // Read the file back
  fs.readFile(filename, "utf8", (err, data) => {
    if (err) {
      return console.error("Error reading file:", err);
    }
    console.log("File contents:", data);
  });
});
