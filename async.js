// ✅ Asynchronous Programming
// Not occuring at the same time
// You can execute multiple things at a time and you do not have to finish executing the current thing in order to move on to next one


// ✅ Asynchronous Example
// console.log('I am Line One')
// setTimeout(() => {
//     console.log('I am Line Two')
// }, 3000)
// setTimeout(() => {
//     console.log('I am Line Three')
// }, 0)
// console.log('I am Line Four')
// setTimeout(() => {
//     console.log('I am Line Five')
// }, 1000)
// Output:
// I am Line One
// I am Line Four
// I am Line Three
// I am Line Five
// I am Line Two


// ✅ Asynchronous Example - undefined value problem in asynchronous
// function sayMyName(name) {
//     let result
//     setTimeout(() => {
//         result = name
//         console.log('I am done ...')
//     }, 3000)
//     return result
// }
// let output = sayMyName("Morshedul Arefin")
// console.log(output) // undefined


// ✅ Solution - You can not assign the function value to "output" variable. You have to handle the operation in that place where you run the asynchronous operation.
// function sayMyName(name) {
//     setTimeout(() => {
//         console.log(name)
//     }, 3000)
// }
// let output = sayMyName("Morshedul Arefin")



// ✅ Asynchronous Example - Restaurant Example
// const processOrder = (customer) => {
//     console.log(`Processing order for customer 1`);

//     setTimeout(() => {
//         console.log(`Cooking completed`);
//     }, 3000);

//     console.log(`Order processed for customer 1`);
// }
// console.log(`Take order for custmoer 1`);
// processOrder();
// console.log(`Completed order for custmoer 1`);
// Output: 
// Take order for custmoer 1
// Processing order for customer 1
// Order processed for customer 1
// Completed order for custmoer 1
// (here the program will wait for 3 seconds, but this is an asynchronous task. So the program will complete all other tasks and after 3 seconds will process the cooking task. For cooking task, it will not wait for executing the other tasks)
// Cooking completed


// ✅ How it works
// https://prnt.sc/_90uQRA_yx4y


// ✅ Flow Control Problem - Restaurant Example Problem
// If you work like this, some un-realistic thing will be happened. You see that after completed order, the cooking completed is showing, it should not be happened. So we have total 3 ways to handle this issue.
// We do not have asynchronous event task execution order control in our hand. So in real life, we will have problem.


// ✅ Three ways to handle asynchronous tasks in javascript
// 1. Callback (have some limitations)
// 2. Promise
// 3. Async Function or Async Await (better version of promise)