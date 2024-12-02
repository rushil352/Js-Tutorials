// // Singleton and Object Literals

// const mySym = Symbol('key1'); // Creating a unique Symbol

// const person = {
//     name: 'John',
//     age: 30,
//     location: "Jaipur",
//     email: "qenv@google.com",
//     [mySym]: "mykey1", // Using a Symbol as a property key
// };

// console.log(person["location"]); // Accessing properties using bracket notation
// console.log(person[mySym]);      // Accessing Symbol property

// // Object Mutability

// person.email = "newemail@gmail.com"; // Updates the email property
// console.log(person);

// Object.freeze(person); // Makes the object immutable
// person.email = "test@gmail.com"; // This will fail silently (no change)
// console.log(person.email); // Still "newemail@gmail.com"


// // Adding Methods to Objects

// person.greeting = function () {
//     console.log(`Hello, ${this.name}`);
// };
// person.greeting(); // "Hello, John"

// // Creating Objects Using new Object()

// const person2 = new Object();
// person2.id = "123abc";
// person2.name = "John";
// person2.age = 30;

// console.log(person2);


// // Nested Objects

// const regular = {
//     email: "qenv@gmail.com",
//     fullname: {
//         userfullname: {
//             firstname: "hiii",
//             lastname: "john",
//         },
//     },
// };

// console.log(regular.fullname.userfullname.lastname); // Accessing nested properties


// // Merging Objects

// const obj1 = { 1: "a", 2: "b", 3: "c" };
// const obj2 = { 4: "d", 5: "e", 6: "f" };

// // Using spread syntax
// const obj3 = { ...obj1, ...obj2 };
// console.log(obj3); // {1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f"}

// // Using Object.assign()
// const obj4 = Object.assign({}, obj1, obj2);
// console.log(obj4); // Same output


// // Working with Arrays of Objects

// const users = [
//     {
//         id: 1,
//         name: "John",
//         age: 30,
//     },
// ];

// users[0].email = "example@example.com"; // Adding a new property
// console.log(users);


// // Getting Object Keys

// console.log(Object.keys(person2)); // ["id", "name", "age"]

// // Object Destructuring

// const course = {
//     coursename: "JavaScript",
//     price: "999",
//     courseInstructor: "Rushil",
//     courseDuration: "6 months",
// };

// const { courseInstructor: instructor } = course;
// console.log(instructor); // "Rushil"


// // Syntax Issue in the Code

// // (
// //     "name": "Rushil",
// //     "age": 25
// // )
// // This is invalid syntax in JavaScript. Objects should be defined using curly braces {}:

// // javascript
// // Copy code
// const user = {
//     name: "Rushil",
//     age: 25,
// };
// console.log(user);