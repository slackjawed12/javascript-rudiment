setTimeout(() => console.log("Hi!"), 1000);

setTimeout((name) => console.log(`Hi! ${name}`), 1000, "lee");

setTimeout(() => console.log("Hello!"));

const timerId = setTimeout(() => console.log("return timer"), 1500);

clearTimeout(timerId);
