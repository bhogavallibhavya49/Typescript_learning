function add(a: number, b: number): number { return a + b; }
function subtract(a: number, b: number): number { return a - b; }
function multiply(a: number, b: number): number { return a * b; }
function divide(a: number, b: number): number { return b !== 0 ? a / b : 0; }
function modulus(a: number, b: number): number { return a % b; }

console.log("E1 Add:", add(10, 5));
console.log("E2 Subtract:", subtract(10, 5));
console.log("E3 Multiply:", multiply(10, 5));
console.log("E4 Divide:", divide(10, 5));
console.log("E5 Modulus:", modulus(10, 3));