console.log("Hi Bhavya,Welcome to class");
let firstName: string = "Sapthagiri"; 
let age: number = 24; 
let isTester: boolean = true;  
console.log(`Name: ${firstName}`); 
console.log(`Age: ${age}`); 
console.log(`Tester: ${isTester ? "Yes" : "No"}`); 

let value: number | string = 10;
console.log(value);
value = "Giri";
console.log(value);
const email: number | string = "bhavya123@gmail.com";
console.log(email);

let password: number | string = "bhavya@123";
console.log(password);

let nullableInfo: string | null = null;
let info = nullableInfo ?? "Default Value";
console.log(info);

