// ✅ Optional chaining is a new feature in JavaScript that allows you to access properties and methods of an object without worrying about whether the object is null or undefined. This can be useful when you're working with complex data structures where some properties or methods might be missing or undefined.

// ✅ The ?. operator is used to chain properties and methods together. If a property or method in the chain is undefined or null, the chain will short-circuit and return undefined instead of throwing an error.

// ✅ Optional chaining can be especially useful when working with data that comes from external sources, where you can't always guarantee that all properties and methods will be present. It can also help make your code more concise and easier to read by avoiding the need for complex if statements or try-catch blocks.



// ✅ Example

// let person = {
//     name: "Arefin",
//     address: {
//         country: "Bangladesh",
//         city: "Khulna",
//         zip: 9100
//     }
// };
// console.log(person?.address?.city); // Output: Khulna
// console.log(person?.address?.state); // Output: undefined
// console.log(person?.phone?.number); // Output: undefined



