const {connect} = require("./client");


console.log("Connecting ...");
connect();

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  const handleUserInput = function(data){
    stdin.on("data", handleUserInput);
    process.stdin.on('data', () => {
      if (key === '\u0003') {
        process.exit();
      }
    });
  }
  
  return stdin;
};

