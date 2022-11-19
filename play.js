//Play.js is used to play the game! Requires files from Input and Client. 

const {connect} = require("./client");
const {setupInput} = require("./input");
console.log("Connecting ...");

setupInput(connect());




