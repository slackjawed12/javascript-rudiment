// 상태변수. 전역이므로 오류가능성 매우 높음
let num = 0;

const increase = function () {
  return ++num;
};

console.log(increase());
console.log(increase());
console.log(increase());

// 카운트 변경 함수
const increaseSafe = function () {
  let numTwo = 0;
  return ++numTwo;
};

// 1, 1, 1
console.log(increaseSafe());
console.log(increaseSafe());
console.log(increaseSafe());

// IIFE + 클로저 이용 : 정보은닉
const increaseFunc = (function () {
  let num = 5;
  return function () {
    return ++num;
  };
})();

console.log(increaseFunc());
console.log(increaseFunc());
console.log(increaseFunc());
