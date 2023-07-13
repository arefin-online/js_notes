// ✅ Promise Example - Single Promise
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
// meeting
//     .then((res) => {
//         // resolved data
//         console.log(res);
//     })
//     .catch((err) => {
//         // rejected data
//         console.log(err.message);
//     });
// console.log(`Hello`);
// Output:
// Hello
// {
//     name: 'Technical Meeting',
//     location: 'Google Meet',
//     time: '10:00 PM'
// }

// Here promise will take some times to execute and so Hello will be printed as it will not wait
// We can use multiple then here


// ✅ Promise Example - Multiple Promise
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
// meeting
//     .then(addToCalendar)
//     .then((res) => {
//         // resolved data
//         console.log(res);
//     })
//     .catch((err) => {
//         // rejected data
//         console.log(err.message);
//     });
// console.log(`Hello`);
// Output:
// Hello
// Technical Meeting has been scheduled on Google Meet at 10:00 PM


// In this example, we have no catch for second promise, because we are sure this one will always resolved and so we can write the promise in new format
// Here are 2 promises, so 2 then(), but only 1 catch method. For all then(), we will just use only one catch. Remember it.


// ✅ Promise Example - Run all promises together and get final result at last. Then do something with that result
// const promise1 = Promise.resolve(`Promise 1 resolved`);
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(`Promise 2 resolved`)
//     }, 3000);
// });
// promise1.then((res) => console.log(res));
// promise2.then((res) => console.log(res));
// Output: 
// Promise 1 resolved
// (program will wait here for 3 seconds)
// Promise 2 resolved



// ✅ Promise Example - Promise.all() - We want to start 2 promises at same time and finally comes in single result
// const promise1 = Promise.resolve(`Promise 1 resolved`);
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(`Promise 2 resolved`)
//     }, 3000);
// });
// Promise.all([promise1, promise2])
//     .then((res) => {
//         console.log(res)
//     })
// Output
// [ 'Promise 1 resolved', 'Promise 2 resolved' ]


// ✅ Promise Example - Promise.race() - This is like Promise.all(). But difference is: it will return only one promise which will execute first. It means one will win the race.
// const promise1 = Promise.resolve(`Promise 1 resolved`);
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(`Promise 2 resolved`)
//     }, 3000);
// });
// Promise.race([promise1, promise2])
//     .then((res) => {
//         console.log(res)
//     })
// Output:
// Promise 1 resolved


// ✅ Promise Problem
// 