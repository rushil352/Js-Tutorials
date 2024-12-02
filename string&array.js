// // string **************

// const name = "Rushil";
// const repoCount = 50;

// // Concatenation
// console.log(name + repoCount); // "Rushil50"

// // Using Template Literals
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// // String Object and Methods
// const gameName = new String('Rushilll-kk');
// console.log(gameName);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf('l'));

// // Substring and Slice
// const newString = gameName.substring(0, 2);
// console.log(newString); // "Ru"

// const anotherString = gameName.slice(0, -8);
// console.log(anotherString); // "R"

// // Trimming Whitespaces
// const newStringOne = " Rushi           l ";
// console.log(newStringOne.trim()); // "Rushi           l"

// // URL Modification
// const url = "https://www.google.com";
// console.log(url.replace('%20', '-')); // No effect since '%20' isn't in the string


// // ********Numbers**************

// const score = 400;
// console.log(score);

// const balance = new Number(100);
// console.log(balance.toString().length); // 3
// console.log(balance.toFixed(2)); // "100.00"

// const otherNumber = 23.345;
// console.log(otherNumber.toPrecision(5)); // "23.345"

// const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN')); // "10,00,000"


// // ******************Math operators***************

// console.log(Math.abs(-4)); // 4
// console.log(Math.round(4.6)); // 5
// console.log(Math.ceil(4.2)); // 5
// console.log(Math.floor(5.6)); // 5
// console.log(Math.min(4, 3, 2)); // 2
// console.log(Math.max(4, 3, 2)); // 4

// // Random Number Between 10 and 20
// const min = 10;
// const max = 20;
// console.log(Math.floor(Math.random() * (max - min + 1)) + min);

// // ***********Dates**************


// let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2024, 11, 2); // December 2, 2024 (Month is zero-indexed)
// console.log(myCreatedDate);

// let myTimeStamp = Date.now();
// console.log(myTimeStamp); // Current timestamp in milliseconds
// console.log(Math.floor(Date.now() / 1000)); // Current timestamp in seconds

// let newDate = new Date();
// console.log(newDate.getDay()); // Day of the week (0 = Sunday)
// console.log(newDate.getMonth()); // Month (0 = January)


// // *************Arrays**************

// const myArray = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(myArray[2]); // 3

// // Array Methods
// myArray.push(2); // Adds to the end
// myArray.pop();   // Removes from the end
// myArray.shift(); // Removes from the start
// console.log(myArray.includes(9)); // false
// console.log(myArray.indexOf(5)); // 3

// const newArr = myArray.join("-");
// console.log(newArr); // "2-3-4-5-6-7-8"

// // Slice and Splice
// const myn1 = myArray.slice(1, 3); // [3, 4] (doesn't modify original array)
// console.log(myn1);

// const myn2 = myArray.splice(1, 3); // [3, 4, 5] (modifies original array)
// console.log(myn2);
// console.log(myArray); // Remaining elements after splice

// // Concatenating Arrays
// const marvel_heros = ["iron man", "captain america", "black panther"];
// const dc_heros = ["superman", "flash", "batman"];
// const all_new_Heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_Heros); // Merged array

// // Flattening Arrays
// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
// const flat_array = another_array.flat(2);
// console.log(flat_array); // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

// // Array Utility Methods
// console.log(Array.isArray("Rushil")); // false
// console.log(Array.from("Rushil"));    // ['R', 'u', 's', 'h', 'i', 'l']
// console.log(Array.from({ name: "Rushil" })); // []

// // Array.of
// let score1 = 100;
// let score2 = 200;
// let score3 = 300;
// console.log(Array.of(score1, score2, score3)); // [100, 200, 300]
