// 함수를 인수로 전달받고 함수를 반환하는 고차함수
function makeCounter(aux) {
  let counter = 0;
  return function () {
    // 보조함수가 상태를 변경한다.
    counter = aux(counter);
    return counter;
  };
}

// 보조함수 1 : 증가시키기
function increase(n) {
  return ++n;
}

// 보조함수 2 : 감소시키기
function decrease(n) {
  return --n;
}

const increaser = makeCounter(increase);
console.log(increaser());
console.log(increaser());

const decreaser = makeCounter(decrease);
console.log(decreaser()); // -1
console.log(decreaser()); // -2
// 결과 : 독립된 렉시컬 환경을 가지므로, 변수 counter가 공유되지 않는다.
// counter를 공유하려면 렉시컬 환경을 공유하는 클로저를 생성해야 함
