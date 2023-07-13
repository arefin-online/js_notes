// 🟡 🟡 🟡 Javascript is Asynchronous 🟡 🟡 🟡


// ✅ Synchronous Programming
// Occuring at the same time
// You can execute one thing at a time. Line by line the codes will be executed.


// ✅ Synchronous Example
// console.log('I am Line One')
// console.log('I am Line Two')
// console.log('I am Line Three')
// console.log('I am Line Four')
// console.log('I am Line Five')


// ✅ Synchronous Example - Restaurant Example
// const processOrder = (customer) => {
//     console.log(`Processing order for customer 1`);

//     var currentTime = new Date().getTime();
//     while(currentTime + 3000 >= new Date().getTime());

//     console.log(`Order processed for customer 1`);
// }
// console.log(`Take order for custmoer 1`);
// processOrder();
// console.log(`Completed order for custmoer 1`);
// Output:
// Take order for custmoer 1
// Processing order for customer 1
// (here the program will wait for 3 seconds, and before completing this task, no command after that will be executed and so this is synchronous behavior)
// Order processed for customer 1
// Completed order for custmoer 1


