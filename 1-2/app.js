const { writeFile } = require("fs");

writeFile(
  "./second-text.txt",
  "Created and writed file from node.js",
  function (err) {
    if (err) {
      console.log(new Error(`There is an Error`));
    } else {
      console.log("New file Created!");
    }
  }
);
