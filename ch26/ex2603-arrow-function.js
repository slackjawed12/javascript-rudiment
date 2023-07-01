// arrow function definition
const multiply = (x, y) => x * y;
console.log(multiply(2, 3));
const twoParam = (a, b) => {};
const noParam = () => {};
const oneStatement = (x) => x * 2;
const oneStatementV2 = (x) => {
  return x * 2;
};

// 객체 리터럴 반환 : 리터럴을 소괄호로 감싸주어야 함
const create = (id, content) => ({ id, content });
console.log(create(1, "JavaScript"));

// 여러 statement : body block 생략 불가
const sum = (a, b) => {
  const result = a + b;
  return result;
};

// arrow 즉시실행함수
const person = ((name) => ({
  sayHi() {
    return `Hi, ${name}`;
  },
}))("lee");
console.log(person.sayHi());

console.log([1, 2, 3].map((v) => v * 2));

// function foo() {
//   const obj = {
//     val: 100,
//     bar() {
//       const thisCheck = () => {
//         console.log("this binding of arrow function in bar:", this);
//       };
//       thisCheck();
//       console.log("this binding of bar:", this);
//     },
//   };
//   console.log(obj.bar());

//   console.log("this binding of foo:", this);
// }

// const caller = foo;
// caller();
