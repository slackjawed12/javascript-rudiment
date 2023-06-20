console.log(globalThis === this);

var foo = 1;
console.log(globalThis.foo);
bar = 2;
console.log(globalThis.bar);

function baz() {
  return 3;
}
// console.log(global.baz()); baz not function

let fooTwo = 123;
console.log(globalThis.fooTwo); // undefined

// built-in global property : Infinity
console.log(globalThis.Infinity === Infinity);
console.log(3 / 0);
console.log(-3 / 0);
console.log(typeof Infinity);

// NaN
console.log(globalThis.NaN);
console.log(Number("xyz"));
console.log(1 * "string");
console.log(typeof NaN);

// global 객체의 undefined
console.log(globalThis.undefined);

// built-in global method : eval - 표현식이면 값 생성, 문이면 실행
console.log(eval("1+2;"));
console.log(eval("var x = 5;"));
console.log(x); // 5

const o = eval("({a:1})");
console.log(o);

const f = eval("(function(){return 1;})");
console.log(f());

console.log(eval("1+2; 3+4;"));

// 런타임에 스코프를 동적으로 수정
const z = 1;
function func() {
  eval("var z = 2;");
  console.log(z); // 2
}

func();
console.log(z); // 1
