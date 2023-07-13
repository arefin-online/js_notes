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


