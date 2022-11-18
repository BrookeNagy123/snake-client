const net = require("net");
const { IP, PORT } = require("./constants");

// Establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // Interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log(data);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
  });

  conn.on("connect", () => {
    conn.write("Name: BEN");
  });
  
  // Testing below for how to add snake movements with a set interval. 
  // conn.on("connect", () => {
  //   setInterval(() => {
  //     conn.write("Move: up");}, 5000);
  // });
  return conn;

};

module.exports = {connect};