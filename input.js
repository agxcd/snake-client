const setupInput = function () {
  const stdin = process.stdin;
  stdin.on("data", (key) => {
    handleUserInput(key);
  });
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = function (key) {
  if (key === "w") {
    console.log("Move: up");
  } else if (key === "a") {
    console.log("Move: left");
  } else if (key === "s") {
    console.log("Move: down");
  } else if (key === "d") {
    console.log("Move: right");
  } else if (key === "\u0003") {
    process.exit();
  }
};

setupInput();

module.exports = { setupInput };
