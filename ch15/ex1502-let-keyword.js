// let 키워드
// 중복 선언 금지
var foo = 123;
var foo = 456;
let bar = 123;
// let bar = 456; // SyntaxError

// 블록 레벨 스코프
let foo2 = 1;
// 지역변수
{
    let foo2 = 2;
    let bar2 = 3;
}

console.log(foo2);
// console.log(bar2); // ReferenceError

// 호이스팅 안 하는 것 처럼 동작
// console.log(foo3); // ReferenceError : before initialization
let foo3;

// let의 선언과 초기화
{
    // console.log(foo);   // before initialization

    let foo;
    console.log(foo);   // undefined

    foo = 1;
    console.log(foo);
}

// 실제로는 호이스팅 한다
let foo4 = 1;

{
    // console.log(foo4); // before initialization
    // 호이스팅 안했다면 전역변수 참조했어야 함
    let foo4 = 2;
}


