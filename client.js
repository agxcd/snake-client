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
    conn.write("Name: SNK");
    console.log("Successfully connected to game server");
  });
  return conn;
};

module.exports = { connect };
