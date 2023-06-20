const strObj = new String("lee");
console.log(typeof strObj); // object
console.log(Object.getPrototypeOf(strObj) === String.prototype);

const numObj = new Number(1.5); // object
console.log(typeof numObj);
console.log(numObj.toFixed());
console.log(Number.isInteger(0.5));

const boolObj = new Boolean(true); // object
console.log(typeof boolObj);

const func = new Function("x", "return x*x"); // function
console.log(typeof func);

const arr = new Array(1, 2, 3);
console.log(typeof arr);

const regExp = new RegExp(/ab+c/i);
console.log(typeof regExp);

const date = new Date();
console.log(typeof date);
