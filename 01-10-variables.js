// // Define variables
// const accountId = 1;
// let accountEmail = "test@example.com";
// var accountPassword = "password123";
// accountCity = "New York";
// let accountState;

// // Display variables in a table format
// console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);


// // ***********usestrict************

// "use strict";
// console.log(3 + 3, "Rushil");

// // Example: Prevents undeclared variables
// let name = "Rushil";
// console.log(name);

// // ******************
// // Primitive Examples
// let score = "55";
// console.log(typeof score); // "string"

// let valueInNumber = Number(score);
// console.log(valueInNumber); // 55

// // Reference Example
// let myObj = { name: "Rushil", age: 22 };
// let arr = ["hiii", "hello", "world"];
// let func = function () {
//   console.log("Hello world");
// };
// console.log(typeof func); // "function"

// // **************operators*************

// // Unary and Binary Operations
// let value = 3;
// let negValue = -value; // -3
// console.log(negValue);

// // String Concatenation
// let str1 = "hello";
// let str2 = "world";
// console.log(str1 + " " + str2); // "hello world"

// // Increment and Decrement
// let gameCounter = 100;
// ++gameCounter; // Pre-increment
// console.log(gameCounter); // 101


// // *****************conditions**************

// console.log(5 > 3);  // true
// console.log("2" == 2);  // true (loose equality)
// console.log("2" === 2); // false (strict equality)

// // Null and Undefined Comparisons
// console.log(null >= 0); // true
// console.log(undefined == null); // true
// console.log(undefined === null); // false


// // Stack (Primitive) vs Heap (Non-Primitive) Memory

// let myYoutubeName = "Rushil";
// let anotherName = myYoutubeName;
// anotherName = "Rushil123";

// console.log(myYoutubeName); // "Rushil"
// console.log(anotherName);   // "Rushil123"


// // Stored in the heap.

// let userOne = {
//     email: "user@google.com",
//     upi: "user@ybl",
//   };
  
//   let userTwo = userOne; // Reference copy
//   userTwo.email = "user@amazon.com";
  
//   console.log(userOne.email); // "user@amazon.com"
  

