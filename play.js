const { connect } = require("./client");
const { setupInput } = require("./input");

// connect();
setupInput(connect());
console.log("you ded cuz you idled");

/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
