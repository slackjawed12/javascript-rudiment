// 렉시컬 스코프 : 함수를 정의한 위치에 의해 상위 스코프를 결정한다
var x = 1;

function foo(){
    var x = 10;
    bar();  // 1
}

function bar(){
    console.log(x); // 1
}

foo();
bar();