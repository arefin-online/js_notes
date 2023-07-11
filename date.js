// ✅ new Date() : Creates a new Date object representing the current date and time.
var obj = new Date();

var result = obj.getDate();
console.log(result); // 11

var result = obj.getDay();
console.log(result); // 2

var result = obj.getFullYear();
console.log(result); // 2023

var result = obj.getHours();
console.log(result); // 23

var result = obj.getMinutes();
console.log(result); // 34

var result = obj.getSeconds();
console.log(result); // 5

var result = obj.getTime();
console.log(result); // 1684312481110

var result = obj.getMonth(); // 0 based, 0 = Jan, 1 = Feb etc. 
console.log(result); // 6

var result = obj.toDateString();
console.log(result); // Tue Jul 11 2023

var result = obj.toTimeString();
console.log(result); // 23:36:07 GMT+0600 (Bangladesh Standard Time)

var result = obj.toLocaleDateString();
console.log(result); // 7/11/2023

var result = obj.toLocaleTimeString();
console.log(result); // 11:37:24 PM
