// 배열 리터럴로 생성
const arr = ["apple", "banana", "orange"];
console.log(typeof arr); // object
console.log(arr.constructor === Array);
console.log(Object.getPrototypeOf(arr) === Array.prototype);

console.log(Object.getOwnPropertyDescriptors([1, 2, 3, 4, 5]));

const arrAll = [
  "string",
  10,
  true,
  null,
  undefined,
  NaN,
  Infinity,
  [],
  {},
  function () {},
];
