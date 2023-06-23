const resolvePromise = Promise.resolve([1, 2, 3]);
resolvePromise.then(console.log);

const resolvePromiseTwo = new Promise((resolve) => resolve([1, 2, 3]));
resolvePromiseTwo.then(console.log);

const rejectedPromise = Promise.reject(new Error("Error!"));
rejectedPromise.catch(console.log);

// 동일 코드
// const rejectedPromiseTwo = new Promise((_, reject) =>
//   reject(new Error("Error!"))
// );
// rejectedPromiseTwo.catch(console.log);
