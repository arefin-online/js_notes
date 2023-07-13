// ✅ Promise Example - basic
// function friendlyFunction() {
//     return Promise.resolve(`Hello`);
// }
// console.log(friendlyFunction());
// Output: 
// Promise { 'Hello' }


// ✅ Async Await Example - Converting the previous example
// async function friendlyFunction() {
//     return `Hello`;
// }
// console.log(friendlyFunction());
// Output: 
// Promise { 'Hello' }


// ✅ IMPORTANT (Previous 2 examples):
// Both the examples will return promise
// You see that second example is more readable and easier.
// When you will use async function, in order to do the time consuming task, we will use await. Await actually does the task of then(), but in readable easy system


// ✅ Async Await Example - Converting the meeting example - Remove then() and use await
// const hasMeeting = false;
// const meeting = new Promise((resolve, reject) => {
//     if(!hasMeeting) {
//         const meetingDetails = {
//             name: 'Technical Meeting',
//             location: 'Google Meet',
//             time: '10:00 PM'
//         }
//         resolve(meetingDetails);
//     } else {
//         reject(new Error('Meeting already scheduled!'));
//     }
// });
// const addToCalendar = (meetingDetails) => {
//     const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
//     return Promise.resolve(calendar);
// }
// async function myMeeting() {
//     const meetingDetails = await meeting;
//     const calendar = await addToCalendar(meetingDetails);
//     console.log(calendar);
// }
// myMeeting();
// console.log(`Hello`);
// Output: 
// Hello
// Technical Meeting has been scheduled on Google Meet at 10:00 PM


// ✅ Async Await Example - Error Handling (it will be like synchrounous system structure)
// const hasMeeting = true;
// const meeting = new Promise((resolve, reject) => {
//     if(!hasMeeting) {
//         const meetingDetails = {
//             name: 'Technical Meeting',
//             location: 'Google Meet',
//             time: '10:00 PM'
//         }
//         resolve(meetingDetails);
//     } else {
//         reject(new Error('Meeting already scheduled!'));
//     }
// });
// const addToCalendar = (meetingDetails) => {
//     const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;
//     return Promise.resolve(calendar);
// }
// async function myMeeting() {
//     try {
//         const meetingDetails = await meeting;
//         const calendar = await addToCalendar(meetingDetails);
//         console.log(calendar);
//     } catch {
//         console.log(`Something Wrong`);
//     }
// }
// myMeeting();
// console.log(`Hello`);
// Output: 
// Hello
// Something Wrong



// 🟡 🟡 🟡 Some Examples showing by Faisal vai 🟡 🟡 🟡

// ✅ Example
// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
// async function fetchData() {
//     console.log(`Fetching Data ...`);
//     await delay(2000); // simulating an asynchronous operation
//     // Simulating API Response
//     const data = {
//         id: 1,
//         name: 'Arefin'
//     };
//     return data;
// }
// async function main() {
//     console.log(`Start`);
//     const result = await fetchData();
//     console.log(`Received data: ${JSON.stringify(result)}`);
//     console.log(`Person id is ${result.id} and name is ${result.name}`);
//     console.log(`End`);
// }
// main();
// console.log(`Hello`);
// Output:
// Start
// Fetching Data ...
// Hello
// (here program will wait for 2 seconds)
// Received data: {"id":1,"name":"Arefin"}
// Person id is 1 and name is Arefin
// End



// ✅ Checking with Live API
// Website: https://jsonplaceholder.typicode.com/users



// ✅ Example - Fetching Data from API 
// ❌ ❌ ❌ SHOW ERROR => ReferenceError: fetch is not defined ❌ ❌ ❌
// async function fetchUserData(userId) {
//     try {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
//         if(!response.ok) {
//             throw new Error(`Failed to fetch user data`);
//         }
//         const userData = await response.json();
//         return userData;
//     } catch (error) {
//         console.error(error);
//     }
// }
// async function displayUserData(userId) {
//     const userData = await fetchUserData(userId);
//     console.log(`User data: ${userData}`);
// }
// displayUserData(1);



// ✅ Example - Fetching Data from API - Multiple Promise
// ❌ ❌ ❌ SHOW ERROR => ReferenceError: fetch is not defined ❌ ❌ ❌

// async function getUserData(userId) {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
//     const userData = await response.json();
//     return userData;
// }
// async function getPostData(postId) {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
//     const postData = await response.json();
//     return postData;
// }
// async function main() {
//     const userId = 1;
//     const postId = 10;
//     const [userData, postData] = await Promise.all([
//         getUserData(userId),
//         getPostData(postId)
//     ]);
//     console.log(`User data: ${userData}`);
//     console.log(`Post data: ${postData}`);
// }
// main();



// 🟡 🟡 🟡 There are some more examples in Faisal vai's lecture, but I can not run the fetch() function and so I am leaving it in this point. 🟡 🟡 🟡