const { open, exists } = require("fs");

exists("./text.txt", (err) => {
  err ? console.log("File Founded!") : console.log(`File Not Found!`);
});

// open("./text.txt", "r", function (err, fd) {
//   err ? console.log("File Not Found!") : console.log("File Founded!");
// });
