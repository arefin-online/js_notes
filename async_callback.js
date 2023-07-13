// ✅ Asynchronous Callback - Restaurant Example
// const takeOrder = (customer,callback) => {
//     console.log(`Take order for ${customer}`);
//     callback(customer);
// }
// const processOrder = (customer, callback) => {
//     console.log(`Processing order for customer 1`);

//     setTimeout(() => {
//         console.log(`Cooking completed`);
//         console.log(`Order processed for ${customer}`);
//         callback(customer);
//     }, 3000);
// }
// const completeOrder = (customer) => {
//     console.log(`Completed order for ${customer}`);
// }

// takeOrder('customer 1', (customer) => {
//     processOrder(customer, (customer) => {
//         completeOrder(customer);
//     });
// });

// console.log(`Testing`)

// Output:
// Take order for customer 1
// Processing order for customer 1
// Testing (program comes to this line, because this full task is asynchronous. Though we use callback to control task flow, the asynchrounous behavior is working without any issue)
// (here program will wait for 3 seconds. But you see that our task order is now correct. After cooking, order is processed and completed)
// Cooking completed
// Order processed for customer 1
// Completed order for customer 1


// ✅ Asynchronous Callback Problem
// If there are multiple tasks, the code block looks complex and not readable. This is called "Callback Hell"
// Callback Hell: Every callback depends/waits for the previous callback, thereby making a pyramid structure that affects the readability and maintainability of the code.
// So we use promise to solve this issue

