const net = require("net");

// const server = net.createServer();

// server.listen(3000, () => {
//   console.log("Server listening on port");
// });

const connect = function () {
  const conn = net.createConnection({
    host: "10.0.2.15",
    port: 50541,
  });
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    setTimeout(() => {
      conn.write("Move: up");
    }, 50);
    setTimeout(() => {
      conn.write("Move: down");
    }, 100);
    setTimeout(() => {
      conn.write("Move: left");
    }, 150);
    setTimeout(() => {
      conn.write("Move: right");
    }, 200);
    setTimeout(() => {
      conn.write("Move: up");
    }, 250);
    setTimeout(() => {
      conn.write("Move: down");
    }, 300);
    setTimeout(() => {
      conn.write("Move: left");
    }, 350);
    setTimeout(() => {
      conn.write("Move: right");
    }, 400);
    conn.write("Name: SNK");
    console.log("Successfully connected to game server");
  });
  return conn;
};

module.exports = { connect };
