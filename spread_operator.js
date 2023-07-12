// The spread operator in JavaScript is used to expand iterable objects (array, string) into individual elements. 
// It is a very useful feature in JavaScript that can simplify your code and make it more readable.
// This notation is used: ellipsis(...)


// ✅ Array Example - Combine 2 Arrays
// const arr1 = [1, 2, 3]
// const arr2 = [4, 5, 6]
// const result = [...arr1, ...arr2]
// console.log(result) // Output: [ 1, 2, 3, 4, 5, 6 ]


// ✅ Array Example - new array with additional elements
// const countryList1 = ["USA", "Australia"]
// const countryList2 = [...countryList1, "Bangladesh", "India"]
// console.log(countryList2) // Output: [ 'USA', 'Australia', 'Bangladesh', 'India' ]


// ✅ Array Example - Copy an Array
// const arr1 = [1, 2, 3]
// const arr2 = [...arr1]
// console.log(arr2) // Output: [ 1, 2, 3 ]


// ✅ Object Example - Combine 2 Objects
// const obj1 = {
//     name: "Arefin",
//     age: 40
// }
// const obj2 = {
//     city: "Khulna",
//     country: "bangladesh"
// }
// const result = {...obj1, ...obj2}
// console.log(result) // Output: { name: 'Arefin', age: 40, city: 'Khulna', country: 'bangladesh' }


// ✅ Object Example - Merge 2 Objects - Override (last one will replace the first one)
// const obj1 = {
//     name: "Arefin",
//     age: 40
// }
// const obj2 = {
//     name: "Smith",
//     country: "bangladesh"
// }
// const result = {...obj1, ...obj2}
// console.log(result) // Output: { name: 'Smith', age: 40, country: 'bangladesh' }


// ✅ Object Example - new object with additional elements
// const person1 = {
//     name: "Arefin",
//     age: 35
// }
// const person2 = {...person1, age: 40}
// console.log(person1) // Output: { name: 'Arefin', age: 35 }
// console.log(person2) // Output: { name: 'Arefin', age: 40 }


// ✅ Object Example - Clone an Object
// const person1 = {
//     name: "Arefin",
//     age: 35
// }
// const person2 = {...person1}
// console.log(person2) // Output: { name: 'Arefin', age: 35 }


// ✅ Function - Pass argument to function
// function sum(a, b) {
//     return a + b;
// }
// const arr = [1, 2];
// console.log(sum(...arr)); // Output: 3


// ✅ Function - Combine fixed and variable parameters
// function greeting(name, ...skills) {
//     const skillsList = skills.map(title => title.toUpperCase());
//     return `Hello, ${name}, your skilled are: ${skillsList}`;
// }
// console.log(greeting('Arefin', 'Laravel', 'WordPress', 'CSS', 'HTML')); // Output: Hello, Arefin, your skilled are: LARAVEL,WORDPRESS,CSS,HTML


// ✅ Sum Elements - using reduce() - Any number of elements
// function sum(...numbers) {
//     return numbers.reduce((total, val) => total + val, 0);
// }
// console.log(sum(1, 2, 3)); // Output: 6
// console.log(sum(1, 2, 3, 4, 5)); // Output: 15

