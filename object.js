// // Singleton and Object Literals
// const mySym = Symbol('key1');

// const person = {
//     name: 'John',
//     age: 30,
//     location: "Jaipur",
//     email: "qenv@google.com",
//     [mySym]: "mykey1",
// };

// console.log(person["location"]); // Accessing property via bracket notation
// console.log(person[mySym]);      // Accessing Symbol property

// person.email = "newemail@gmail.com"; // Updating the email property
// // Object.freeze(person);            // Uncomment to make the object immutable

// console.log(person);

// // Adding a method to the person object
// person.greeting = function () {
//     console.log(`Hello, ${this.name}`);
// };
// console.log(person.greeting); // Checking the new method

// // Using `new Object()` to create a new object
// const person2 = new Object();
// person2.id = "123abc";
// person2.name = "John";
// person2.age = 30;

// console.log(person2);

// // Nested object example
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

// // Merging two objects
// const obj1 = { 1: "a", 2: "b", 3: "c" };
// const obj2 = { 4: "d", 5: "e", 6: "f" };
// const obj3 = { ...obj1, ...obj2 }; // Spread syntax for merging objects
// // const obj3 = Object.assign({}, obj1, obj2); // Alternate method

// console.log(obj3);

// // Correcting the `users` array
// const users = [
//     {
//         id: 1,
//         name: "John",
//         age: 30,
//     },
// ];

// // Accessing properties in the `users` array
// users[0].email = "example@example.com"; // Adding a property to the first user
// console.log(users);

// // Getting keys of the `person2` object
// console.log(Object.keys(person2)); // Corrected 'object' to 'Object'


const course = {
    coursename: "JavaScript",
    price: "999",
    courseInstructor:"Rushil",
    courseDuration: "6 months"
}
const{courseInstructo: instructor}= course
console.log(Instructor)

const navbar =({company})

