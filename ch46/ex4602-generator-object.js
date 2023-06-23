// 일반함수 방식으로 정의된 제너레이터 함수
function* genFunc() {
  yield 1;
  yield 2;
  yield 3;
}

// 제너레이터 함수
const generator = genFunc();

// 제너레이터 객체는 이터러블이면서 동시에 이터레이터
// Symbol.iterator 메서드를 직접 구현하거나, 프로토타입 체인을 통해 상속받은 객체
console.log(Symbol.iterator in generator); // true
console.log("next" in generator); // true
