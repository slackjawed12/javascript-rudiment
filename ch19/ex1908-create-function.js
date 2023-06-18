function foo() {}

console.log(foo.constructor === Function);

// 생성자 호출해서 생성한 함수 객체 : 렉시컬 스코프 x, 전역 함수인 것처럼 스코프 생성, 클로저 x
let bar = Function('x', 'y', 'return x + y');
console.log(bar.constructor === Function);
