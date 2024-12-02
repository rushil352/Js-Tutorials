// // 1. If-Else Statements

// const isUserloggedIn = true;
// const temperature = 41;
// if (temperature < 50) {
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }
// // Checks if temperature is less than 50.
// // Outputs "less than 50" if the condition is true.
// // Otherwise, outputs "temperature is greater than 50".

// // 2. Comparisons and Scoping

// const score = 200;
// if (score > 100) {
//     const power = "fly";
//     console.log(`user power: ${power}`);
// }
// // What it does:
// // If score > 100, declares a block-scoped const variable power and outputs it.
// // Important Note:
// // power is block-scoped, so it is inaccessible outside the if block.

// // 3. Nested If-Else Statements

// const balance = 1000;
// if (balance > 500) {
//     console.log("more than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else {
//     console.log("less than 1200");
// }

// // 4. Logical Operators

// const isUserloggedIn = true;
// const debitCard = true;
// const loggedInFromGoogle = false;
// const loggedInFromEmail = true;

// if (isUserloggedIn && debitCard) {
//     console.log("user is logged in and has a debit card");
// }
// if (loggedInFromGoogle || loggedInFromEmail) {
//     console.log("user logged in from google or email");
// }
// // Checks if user is logged in and has a debit card.


// // 5. Switch Statement
// const month = "march";
// switch (month) {
//     case "january":
//         console.log("january");
//         break;
//     case "february":
//         console.log("february");
//         break;
//     case "march":
//         console.log("march");
//         break;
//     case "april":
//         console.log("april");
//         break;
//     default:
//         console.log("month not found");
//         break;
// }

// // 6. Truthy and Falsy Values
// // Falsy Values: Evaluate to false in a Boolean context.
// // false, 0, -0, BigInt(0n), "", null, undefined, NaN
// // Truthy Values: All values that are not falsy.


// // 7. Nullish Coalescing Operator

// let val1;
// val1 = null ?? 10; // Result: 10
// val1 = undefined ?? 20; // Result: 20
// val1 = 5 ?? 30; // Result: 5
// console.log(val1);
// // The nullish coalescing operator (??) returns the first operand if it is not null

// // 8. Ternary Operator

// const iceTeaPrice = 100;
// iceTeaPrice <= 80 
//     ? console.log("less than 80") 
//     : console.log("more than 80");
// // The ternary operator is a shorthand for if-else statements.