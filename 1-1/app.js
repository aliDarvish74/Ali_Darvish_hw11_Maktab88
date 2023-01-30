const { appendFile, open } = require("fs");

appendFile("./text.txt", `\nApended From Node.js`, function (error) {
  if (error) {
    console.log(
      new Error(`There is an error in appending text to target file!`)
    );
  }
  console.log(`Text successfully appended to the target.`);
});

// open("./text.txt", "r", function (openError, data) {
//   if (openError) {
//     console.log(new Error(openError.message));
//   } else {
//     appendFile("./text.txt", `\n\nAdded From Node.js`, (appendError) => {
//       if (appendError) {
//         console.log(appendError.message);
//       } else {
//         console.log(`Text successfully appended to the target.`);
//       }
//     });
//   }
// });
