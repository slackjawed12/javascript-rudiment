function* genFunc() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = genFunc();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
// 남은 yield 표현식이 없으므로 제너레이터 함수의 마지막까지 실행
console.log(generator.next()); // undefined, true
