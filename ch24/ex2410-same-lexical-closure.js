const counter = (function () {
  let counter = 0;

  // 상태를 유지하기 위해 '함수를 인수로 받는' 클로저를 반환한다.
  return function (aux) {
    counter = aux(counter);
    return counter;
  };
})();

function increase(n) {
  return ++n;
}

function decrease(n) {
  return --n;
}

console.log(counter(increase));
console.log(counter(increase));

console.log(counter(decrease));
console.log(counter(decrease));
