const { readFile, readFileSync } = require("fs");

let userData = JSON.parse(readFileSync("../user-data.json"));

console.log(userData.filter((user) => user.age > 18));
