// 함수 표현식으로 해석
function foo(){
    console.log('foo');
}

// foo : 엔진이 암묵적으로 생성한 식별자
foo();

// 함수 리터럴을 피연산자로 사용하는 맥락 : 리터럴 표현식으로 해석
(function bar() { console.log('bar');})
bar();  // bar is not defined : 외부에는 bar 함수를 가리키는 식별자가 없어 호출 불가
