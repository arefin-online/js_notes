// ✅ Example 1

// 👉 Without Arrow Function

// function message(name) {
//     console.log("Hello " + name)
// }
// message("Arefin")

// 👉 With Arrow Function

// const message = (name) => {
//     console.log("Hello " + name)
// }
// message("Arefin")


// ✅ Example 2

// 👉 Without Arrow Function

// function add(n1,n2) {
//     return n1+n2
// }
// console.log(add(10,20))

// 👉 With Arrow Function

// const add = (n1,n2) => {
//     return n1+n2
// }
// console.log(add(10,20))

// 👉 With Arrow Function - but for single operation we can skip return and write statement in one line. But become careful, because writing this way decreases the code readability

// const add = (n1,n2) => n1+n2
// console.log(add(10,20))

// ✅ Example 3

// 👉 Without Arrow Function

// function sum(n) {
//     const total = n.reduce(function(o,n){
//         return o+n
//     })
//     return total
// }
// console.log(sum([10,20,30]))


// 👉 With Arrow Function - outside function

// const sum = (n) => {
//     const total = n.reduce(function(o,n){
//         return o+n
//     })
//     return total
// }
// console.log(sum([10,20,30]))

// 👉 With Arrow Function - outside and inside functions both

// const sum = (n) => {
//     const total = n.reduce((o,n) => {
//         return o+n
//     })
//     return total
// }
// console.log(sum([10,20,30]))

// 👉 With Arrow Function - removing return

// const sum = (n) => {
//     const total = n.reduce((o,n) => o+n)
//     return total
// }
// console.log(sum([10,20,30]))

// 👉 With Arrow Function - removing return

// const sum = (n) => {
//     return n.reduce((o,n) => o+n)
// }
// console.log(sum([10,20,30]))

// 👉 With Arrow Function - removing all returns

// const sum = (n) => n.reduce((o,n) => o+n)
// console.log(sum([10,20,30]))

// ✅ Arrow Function Issues or Problems
// 1. You can not use 'this' keyword in arrow function
// 2. Arrow functions cannot be used as constructors to create new instances of objects. 
// 3. Arrow functions are always anonymous and cannot be named. This can make debugging more challenging