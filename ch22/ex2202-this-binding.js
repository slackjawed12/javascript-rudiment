const foo = function () {
  console.dir(this);
};
// 1. 일반함수호출 : global object
foo();

// 2. 메서드 호출 : 호출한 객체
const obj = { foo };
obj.foo();

// 3. 생성자 함수 호출
const objV2 = new foo();
console.dir(objV2);

// 4. Function.prototype.apply/call/bind 메서드에 의한 호출
const bar = { name: "bar" };

foo.call(bar);
foo.apply(bar);
foo.bind(bar)();
