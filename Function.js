// // 1. Printing Strings and Functions

// function sayMyName() {
//     console.log("R");
//     console.log("U");
//     console.log("S");
//     console.log("H");
//     console.log("I");
//     console.log("L");
// }

// // sayMyName(); // Uncomment to execute


// // 2. Adding Two Numbers

// function addTwoNumbers(number1, number2) {
//     return number1 + number2;
// }

// const result = addTwoNumbers(3, 4);
// console.log("Result: ", result); // Outputs: 7

// // 3. Default Parameters

// function loginUserMessage(username = "sam") {
//     if (!username) {
//         console.log("Please enter a username");
//         return;
//     }
//     return `${username} just logged in`;
// }

// console.log(loginUserMessage("Rushil")); // Outputs: "Rushil just logged in"
// console.log(loginUserMessage());        // Outputs: "sam just logged in"


// // 4. Rest Parameters

// function calculateCartPrice(...num1) {
//     return num1; // Returns all numbers passed as arguments in an array
// }

// console.log(calculateCartPrice(200, 400, 5000)); // Outputs: [200, 400, 5000]

// // 5. Handling Objects as Arguments

// const user = {
//     username: "Rushil",
//     price: 199,
// };

// function handleobject(anyobject) {
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
// }

// handleobject(user);
// // OR inline object
// handleobject({
//     username: "John",
//     price: 250,
// });

// function handleobject({ username, price }) {
//     console.log(`Username is ${username} and price is ${price}`);
// }

// // 6. Accessing Array Elements

// const myNewArray = [200, 300, 4400, 999];

// function returnSecondValue(getArray) {
//     return getArray[1]; // Returns the second value (index 1)
// }

// console.log(returnSecondValue(myNewArray)); // Outputs: 300



