const { writeFile, unlink } = require("fs");

// Creation

// writeFile(
//   "./third-text.txt",
//   "Created From node.js to remove with node.js!",
//   function (err) {
//     err
//       ? console.log(`Cannot create this file!`)
//       : console.log("File Created!");
//   }
// );

// Removal

unlink("./third-text.txt", function (err) {
  err
    ? console.log(`There isn't any file with given path!`)
    : console.log(`File succesfully removed from directory!`);
});
