function foo(){}
const bar = function(){};
// ECMAScript 사양에서 프로퍼티 x의 값으로 할당된 것은 일반 함수로 정의함. 메서드로 인정하지 않음
const baz={
    x: function(){}
};

new foo();
new bar();
new baz.x();

// 화살표 함수 정의
const arrow = () => {};
// new arrow(); // TypeError

// ES6의 메서드 축약표현만 메서드로 인정
const obj = {
    x() {}
};

// new obj.x(); // type error

