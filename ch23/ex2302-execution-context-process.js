// 1전역객체 생성 - 빌트인 프로퍼티, 표준 빌트인 객체, 호스트 객체를 포함
// 2전역코드 평가
// 2-1 비어있는 전역 실행 컨텍스트 생성 후 스택에 push
// 2-2 전역 렉시컬 환경을 생성하고 execution context에 바인딩
// 2-2-1 전역 환경 레코드 생성
// 2-2-1-1 객체환경 레코드 생성
// 2-2-1-2 선언적 환경 레코드 생성
// 2-2-2
var x = 1;

const y = 2;

function foo(a) {
  var x = 3;
  const y = 4;

  function bar(b) {
    const z = 5;
    console.log(a + b + x + y + z);
  }
  bar(10);
}

foo(20);
