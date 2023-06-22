let x = 1;
if (true) {
  let x = 10;
  console.log(x);
}

console.log(x);

// for loop는 실행마다 코드블록을 위한 새로운 렉시컬 환경 생성
// 내부에 정의된 함수 foo의 상위 스코프는 for 블록 렉시컬 환경
for (let i = 0; i < 10; i++) {
  let y = 7;
  function foo(num) {
    return num * num;
  }
  console.log(foo(y));
}

console.log(foo(3));
