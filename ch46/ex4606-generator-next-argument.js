// 제너레이터의 next 메서드에는 인수를 전달할 수 있음
// next에 전달한 인수 : 제너레이터 함수의 yield 표현식을 할당받는 변수
function* genFunc() {
  // 1은 next 메서드가 반환한 이터레이터 리절트 객체의 value 프로퍼티 값임
  // x는 next 메서드가 두번째 호출되면 결정
  const x = yield 1;

  const y = yield x + 10;

  return x + y;
}

const generator = genFunc(0);

let res = generator.next();
console.log(res);

// next에 전달된 인수 10이 함수 내부의 x에 할당
// 인수를 전달해서 제너레이터 객체에 상태를 넣을 수 있다.
// 함수 외부에서 내부로 상태를 전달하는 것.
res = generator.next(10);
console.log(res);

// 인수 20이 y에 할당. 제너레이터 객체가 갖는 값은 x + 10 = 10 + 10인 20 할당됨
res = generator.next(20);
console.log(res);
