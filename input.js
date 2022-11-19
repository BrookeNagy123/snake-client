// Setup interface to handle user input from stdin.
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  const handleUserInput = stdin.on("data",(key) => {
    // Below are the keys to direct the snake and a few different options to say something in the game.
    if (key === '\u0003') {
      process.exit();
    }
    if (key === "w") {
      conn.write("Move: up");
    }
    if (key === "a") {
      conn.write("Move: left");
    }
    if (key === "s") {
      conn.write("Move: down");
    }
    if (key === "d") {
      conn.write("Move: right");
    }
    if (key === "b") {
      conn.write("Say: Boo");
    }
    if (key === "n") {
      conn.write("Say: Sss");
    }
    if (key === "m") {
      conn.write("Say: Zoom");
    }
  });
  return stdin;
};


module.exports = {setupInput};