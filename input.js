// Setup interface to handle user input from stdin.
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = (key) => {
  // Below are the keys to direct the snake and a few different options to say something in the game.
  if (key === '\u0003') {
    process.exit();
  }
  if (key === "w") {
    connection.write("Move: up");
  }
  if (key === "a") {
    connection.write("Move: left");
  }
  if (key === "s") {
    connection.write("Move: down");
  }
  if (key === "d") {
    connection.write("Move: right");
  }
  if (key === "b") {
    connection.write("Say: Boo");
  }
  if (key === "n") {
    connection.write("Say: Sss");
  }
  if (key === "m") {
    connection.write("Say: Zoom");
  }
};

module.exports = {setupInput};