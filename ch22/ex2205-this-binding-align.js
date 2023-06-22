// 중첩함수, 콜백함수의 일반함수 호출 시 this 바인딩을 외부 메서드와 일치시키기
var value = 1;

const obj = {
  value: 100,
  foo() {
    // this는 obj에 바인딩 되어있고, 이것을 변수에 할당한다.
    const that = this;
    // 콜백에서는 this가 아닌 that을 참조하도록 한다.
    setTimeout(function () {
      console.log(that.value);
    }, 100);
  },
};

obj.foo();

// Function.prototype.bind 이용한 this 바인딩 일치
var valueTwo = 2;

const objTwo = {
  value: 200,
  fooTwo() {
    // 콜백함수에 명시적으로 this 바인딩
    setTimeout(
      function () {
        console.log(this.valueTwo);
      }.bind(this),
      100
    );
  },
};

var valueThree = 3;

// 화살표 함수 이용
const objThree = {
  value: 300,
  fooThree() {
    setTimeout(() => console.log(this.valueThree), 300);
  },
};
