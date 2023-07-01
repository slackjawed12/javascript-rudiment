// ES6 이전의 함수 호출 방식 : 다양함
// callable이면서 constructor
var foo = function () {
  return 1;
};

// call
foo();

// construct
new foo();

// object binded method
var obj = {
  foo: foo,
};

obj.foo();

var obj2 = {
  x: 10,
  f: function () {
    return this.x;
  },
};

console.log(obj2.f());

var bar2 = obj2.f;
console.log(bar2());

console.log(new obj2.f());
// 성능 상 문제 : contstuctor이므로 prototype 프로퍼티를 갖고, 프로토타입 객체까지 생성

// 콜백함수의 경우 : 마찬가지로 constructor이고 프로토타입 생성
[1, 2, 3].map(function (item) {
  return item * 2;
});
