// 무한 이터러블 생성 함수 with 이터레이션 프로토콜
const infiniteFibonacci = (function () {
  let [pre, cur] = [0, 1];

  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      [pre, cur] = [cur, pre + cur];
      return { value: cur };
    },
  };
})();

for (const num of infiniteFibonacci) {
  if (num > 10000) break;
  console.log(num);
}

// 무한 이터러블 셍성 제너레이터 함수
const infiniteFibonacciTwo = (function* () {
  let [pre, cur] = [0, 1];
  while (true) {
    [pre, cur] = [cur, pre + cur];
    yield cur;
  }
})();

for (const num of infiniteFibonacciTwo) {
  if (num > 10000) break;
  console.log(num);
}
