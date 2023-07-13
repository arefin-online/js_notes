// ✅ Short-circuiting is the evaluation of an expression from left to right with || and && operators. If the condition is met and the rest of the conditions won't affect the already evaluated result, the expression will short-circuit and return that result (value).


// ✅ Operators

// && = AND operator
// || = OR operator
// ?? = Nullish Coalescing Operator


// ✅ The && Operator

// If the left operand is falsy (false, 0, null, undefined, NaN), it is returned. Otherwise, the right operand is returned.


// ✅ Example

// const result = false && true;
// console.log(result); // Output: false

// const result = true && false;
// console.log(result); // Output: false

// const result = false && false;
// console.log(result); // Output: false

// const result = true && true;
// console.log(result); // Output: true


// ✅ The || Operator

// If the left operand is truthy, it is returned. Otherwise, the right operand is returned.


// ✅ Example

// const result = false || true;
// console.log(result); // Output: true

// const result = true || false;
// console.log(result); // Output: true

// const result = false || false;
// console.log(result); // Output: false

// const result = true || true;
// console.log(result); // Output: true



// ✅ The ?? Operator

// The ?? operator returns the right operand if the left operand is null or undefined; otherwise, it returns the left operand.
// This operator is useful for providing a default value when dealing with potentially null or undefined values.


// ✅ Example

// const name = null;
// const defaultName = name ?? 'John Doe';
// console.log(defaultName);  // Output: John Doe

// const name = "Arefin";
// const defaultName = name ?? 'John Doe';
// console.log(defaultName);  // Output: Arefin


// ✅ Short Circuiting Example - handling default values

// function greetUser(name) {
//     name = name || 'Guest';
//     console.log(`Hello, ${name}!`);
// }
// greetUser();  // Output: Hello, Guest!
// greetUser('Arefin');  // Output: Hello, Arefin!


// ✅ Short Circuiting Example - Using logical operators for conditional statements

// const checkAge = (age) => {
//     if (age >= 18 && age <= 65) {
//         console.log(`You are eligible.`);
//     } else {
//         console.log(`You are not eligible.`);
//     }
// }
// checkAge(25);  // Output: You are eligible.
// checkAge(10);  // Output: You are not eligible.


// ✅ Short Circuiting Example (IMP) - Nullish Coalescing Operator

// const getUserRole = (user) => {
//     const role = user.role ?? 'Guest';
//     console.log(`User role: ${role}`);
// }
// const user1 = { role: 'Admin' };
// const user2 = { role: null };
// const user3 = {};  // role property is undefined

// getUserRole(user1);  // Output: User role: Admin
// getUserRole(user2);  // Output: User role: Guest
// getUserRole(user3);  // Output: User role: Guest



// ✅ Short Circuiting Example (IMP) - prevent errors when accessing nested properties

// const person = {
//     id: 1,
//     name: 'Arefin',
//     address: {
//         country: 'Bangladesh',
//         city: 'Khulna',
//     },
// };
// const item1 =  person.address.city && person.address;
// const item2 =  person.address && person.address.city;
// console.log(item1); // Output: { country: 'Bangladesh', city: 'Khulna' }
// console.log(item2); // Output: Khulna



// ✅ Short Circuiting Example - Function Fallback

// function greet(name) {
//     name = name || getDefaultName();
//     console.log(`Hello, ${name}!`);
// }
// function getDefaultName() {
//     console.log(`Fetching default name ...`);
//     return 'Guest';
// }
// greet();  // Output: Fetching default name... Hello, Guest!
// greet('John');  // Output: Hello, John!


// ✅ Short Circuiting Example - Using logical operators for conditional assignment

// const age = 21;
// const test = age >= 18 && age <= 65;
// console.log(test);  // Output: true


// ✅ Short Circuiting Example - ?? Operator to handle default values
// const username = getUserInput() ?? 'Anonymous';
// console.log(`Username: ${username}`);
// function getUserInput() {
//     return null;
// }

