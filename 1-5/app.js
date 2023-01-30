const { readFile, readFileSync } = require("fs");
const { json } = require("stream/consumers");

let userData = JSON.parse(readFileSync("../user-data.json"));

console.log(userData.filter((user) => user.age > 18));
