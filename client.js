const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
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
