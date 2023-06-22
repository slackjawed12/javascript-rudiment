const x = 1;
const y = 1;
function foo(a) {
  const x = 10;
  const y = 20;

  console.log(a + x + y);
}

foo(100);

console.log(x + y);

// 전역 코드 평가
// 전역 코드 실행
// 함수 코드 평가
// 함수 코드 실행
