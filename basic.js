// Basic:
// var a = 10;
// var b = 20;
// var c = a + b;
// console.log(c)

// Object Example:
// var person = {
//     name: "Arefin",
//     age: 30,
//     city: "Khulna"
// }
// console.log(person)
// console.log(person.name)
// console.log(person['age'])

// Array
// var persons = ['Arefin', 'Sabbir', 'Rahim'];
// console.log(persons[1])
// console.log(persons)


// If else
// var marks = 85;
// if(marks >= 80) {
//     console.log("A+")
// } else if(marks < 80) {
//    console.log("Not A+")
// } else {
//    console.log("Invalid")
// }

// For loop
// let str = ''
// for(i=1;i<=10;i++) {
//     str += i + ' '
// }
// console.log(str);

// Function
// function add() {
//     var a = 10;
//     var b = 20;
//     var c = a + b;
//     console.log(c);
// }
// add();

// Function - with return
// function add(a,b) {
//     return a + b;
// }
// var sum = add(10,20);
// console.log(sum);

// for loop over array
// var students = ["Arefin","Sabbir","Rahim"];
// for(i=0;i<students.length;i++) {
//     console.log(students[i]);
// }

// for in loop over array
// var students = ["Arefin","Sabbir","Rahim"];
// for(var i in students) {
//     console.log(students[i]);
// }

// for in loop over object
// var student = {
//     name: 'Arefin',
//     age: 30,
//     city: 'Khulna'
// }
// for(var i in student) {
//     console.log(i + ' = ' + student[i]);
// }

// Array Concat
// var arr1 = ["A", "B", "C"];
// var arr2 = ["D", "E", "F"];
// var result = arr1.concat(arr2);
// console.log(result);

// Array From (String to Array conversion):
// var text = "My name is Arefin";
// var arr = Array.from(text);
// console.log(arr);


// Array Filter (search or filter into an array and return output based on a condition):
// var num = [30,32,43,50,11,65,70,42,80];
// var result = num.filter(function(item){
//     return item%2!=0;
// });
// console.log(result);


//Advanced Example:
// var startWith = 's';
// var persons = ['akram', 'sabbir', 'robin', 'limon', 'ahmad', 'abdullah', 'sagir', 'rafi'];
// var final = persons.filter(function(item){
//     var temp = Array.from(item);
//     if(temp[0] == startWith) {
//         return item;
//     }
// });
// console.log('Names start with \'' + startWith + '\' are:');
// for(var i in final) {
//     console.log(final[i]);
// }


// Array Find - search into an array and return the 1st element based on a condition
// var num = [30,32,40,50,12,60,70,42,80];
// var result = num.find(function(item){
//      return item>50;
// });
// console.log(result);

//Array Find Index - search into an array and return the index of the 1st element based on a condition
// var num = [30,32,40,50,12,60,70,42,80];
// var result = num.findIndex(function(item){
//      return item>50;
// });
// console.log(result);


// Array foreach
// var students = ["Arefin", "Sabbir", "Rahim"];
// students.forEach(function(item){
//     console.log(item);
// });

// Array Includes - it is used to search an element into an array - if there is an specific element into an array. Boolean return.
// var students = [20,30,40,50,60,70,80];
// var result = students.includes(50);
// console.log(result); // true

// var students = [20,30,40,50,60,70,80];
// var result = students.includes(100);
// console.log(result); // false


// Array IndexOf - search an array and return index - if there is an specific element into an array and if exists what is the index
// var students = [20,30,40,50,60,70,80];
// var result = students.indexOf(50);
// console.log(result); // 3

// var students = [20,30,40,50,60,70,80];
// var result = students.indexOf(100);
// console.log(result); // -1


// Array reverse
// var students = [30,20,50,45,60,70,80];
// var result = students.reverse();
// console.log(result);

// Array push - add an element in the last of an array
// var students = [30,20,50,45,60,70,80];
// students.push(75);
// console.log(students);

// Array pop - remove the last element of an array
// var students = [30,20,50,45,60,70,80];
// students.pop();
// console.log(students);

// Array sort - sort by ascending
// var students = [30,20,50,45,60,80,70];
// students.sort();
// console.log(students);

// Array sort - sort by descending
// var students = [30,20,50,45,60,80,70];
// students.sort().reverse();
// console.log(students);

// Array slice - slice some portions of an array
// var students = [30,20,50,45,60,80,70];
// var result = students.slice(1,3);
// console.log(result);

// Array splice - add or remove elements to/from an array - it modifies the array
// splice(index,removeCount,addElement)
//var students = [30,20,50,45,60,80,70];
//students.splice(2,1);
//console.log(students); // 30,20,45,60,80,70
//students.splice(2,4);
//console.log(students); // 30,20,70
//students.splice(0,0,90);
//console.log(students);   // 90,30,20,50,45,60,80,70