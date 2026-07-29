// Simulation of repeated input without external modules:
const inputs = ["apple", "banana", "exit"];
let index = 0;
let userInput: string | undefined;

do {
    userInput = inputs[index++];
    console.log("User typed:", userInput);
} while (userInput !== undefined && userInput.toLowerCase() !== "exit");

console.log("Exited loop");