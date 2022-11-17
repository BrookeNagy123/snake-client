const net = require("net");
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "192.168.0.11",
    port: 50541,
  });;

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log(data)
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
  });

  conn.on("connect", () => {
    conn.write("Name: BEN");
  });

  // conn.on("connect", () => {
  //   setInterval(() => {
  //     conn.write("Move: up");}, 5000);
  // });



  return conn;

};

module.exports = {connect};