// 선언문이지만 표현식은 아님. 값으로 평가될 수 없음
var x;

// 표현식이면서 완전한 문
x = 1 + 2;

// 구별법 : 변수에 할당해보기 - 표현식이 아닌 문은 값처럼 사용할 수 없기 때문
// var foo = var x; 

var x;

// 할당문은 표현식인 문이다.
x = 100;

// 할당문이 표현식이므로 변수에 할당할 수 있다.
var foo = x = 100;

// 완료값
// 표현식이 아닌 문을 실행할 때 출력하는 값 (undefined) : 평가 결과 아님. 할당, 참조 불가
// 표현식인 문을 실행하면 평가된 값을 반환함


