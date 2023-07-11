// Template Literals or Template Strings, provide a convenient way to concatenate strings and include dynamic expressions within them. They were introduced in ECMAScript 6(ES6) and have become widely adopted due to their readability and flexibility.

// Template literals are created using backticks() instead of single or double quotes.


// ✅ Without Template Literal
// const fname = "Morshedul"
// const lname = "Arefin"
// const result = "My full name is " + fname + " " + lname
// console.log(result)


// ✅ Using Template Literal - call Variables
// const fname = "Morshedul"
// const lname = "Arefin"
// const result = `My full name is ${fname} ${lname}`
// console.log(result)


// ✅ Using Template Literal - call function
// function fullName() {
//     return "Morshedul Arefin"
// }
// const result = `My name is ${fullName()}`
// console.log(result)


// ✅ Using object and array
// const student = {
//     name: "Smith",
//     email: "smith@gmail.com",
//     address: {
//         country: "USA",
//         city: "NYC",
//         zip: 12443
//     },
//     mobile: [111,222,333]
// }
// const {name} = student // destructuring
// const detail = `His name is ${name}. His email address is ${student?.email}. His country is ${student.address.country}. He has total ${student.mobile.length} mobile numbers and last one is ${student.mobile[2]}`
// console.log(detail)


// ✅ Multi Line String
// const someText =  `I am Arefin.
//     I live in Bangladesh and 
//         I love my country very much`
// console.log(someText)


// ✅ Expression Evaluation
// const a = 10
// const b = 20
// const result =  `The summation of ${a} and ${b} is: ${a+b}`
// console.log(result)


// ✅ Escaping Backticks
// const result = `My country name is \`Bangladesh\` and I live in \`Khulna\` city`
// console.log(result)

