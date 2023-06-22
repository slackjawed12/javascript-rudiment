const person = {
  name: "lee",
  foo(callback) {
    setTimeout(callback, 100);
  },
};

// 콜백 호출 이전에는 this가 person임
// 콜백함수는 일반함수로 호출되므로 this는 전역객체를 가리킴
// 문맥상 콜백함수는 헴퍼함수역할이므로 this가 같아야 함
person.foo(function () {
  console.log(`Hi! my name is ${this.name}`);
});

const personTwo = {
  name: "Kim",
  bar(callback) {
    setTimeout(callback.bind(this), 100);
  },
};

personTwo.bar(function () {
  console.log(`Hi! my name is ${this.name}`);
});
