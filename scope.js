// // Block Scope and Shadowing
// let a = 400;

// if (true) {
//     let a = 20; // Shadowing the outer `a` inside the block
//     const b = 30; // Block-scoped variable
//     // var c = 40; // Uncomment for globally scoped variable
//     // console.log('INNER: ', a);
// }

// // console.log(a); // Outputs 400 (outer `a`)
// // console.log(b); // ReferenceError: `b` is not defined (block-scoped)
// // console.log(c); // Uncomment to see the result of `var` (global scope)

// // Closures

// function one() {
//     const username = 'John';
//     function two() {
//         const website = "youtube";
//         // console.log(username); // Access to the outer scope variable (closure)
//     }
//     // console.log(website); // ReferenceError: website is not accessible here
//     two();
// }
// one();


// // Function with if Block
// if (true) {
//     const username = "Rushil";
//     if (username === "Rushil") {
//         const website = "youtube";
//         // console.log(username + website); // Outputs: Rushilyoutube
//     }
//     // console.log(website); // ReferenceError: `website` is block-scoped
// }
// // console.log(username); // ReferenceError: `username` is block-scoped


// // Function Expressions and Arrow Functions
// function addone(num) {
//     return num + 1;
// }
// console.log(addone(5)); // Outputs: 6

// const addTwo = function (num) {
//     return num + 2;
// };
// console.log(addTwo(5)); // Outputs: 7

// const addTwoArrow = (num1, num2) => num1 + num2; // Arrow function
// console.log(addTwoArrow(3, 4)); // Outputs: 7


// // Object and this Context

// const user = {
//     username: "Rushil",
//     price: 199,
//     welcomeMessage() {
//         console.log(`Welcome ${this.username}, your price is ${this.price}`);
//     },
// };
// user.welcomeMessage(); // Outputs: Welcome Rushil, your price is 199


// // IIFE (Immediately Invoked Function Expression)

// (function one() {
//     console.log(`DB CONNECTED`);
// })(); // Outputs: DB CONNECTED

// (function two(name) {
//     console.log(`DB CONNECTED11 ${name}`);
// })('Rushil'); // Outputs: DB CONNECTED11 Rushil
