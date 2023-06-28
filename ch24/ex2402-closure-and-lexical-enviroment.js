const x = 1;

function outer() {
  const x = 10;
  const inner = function () {
    console.log(x);
  };

  return inner;
}

// outer 호출하면 outer 실행 컨텍스트는 제거
const innerFunc = outer();
innerFunc(); // 결과 : outer 함수의 지역변수 x값 10

// 중첩함수가 더 오래 유지되어 생명주기가 종료한 외부 함수의 변수를 참조할 수 있게 된다.
