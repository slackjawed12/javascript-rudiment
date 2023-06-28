const x = 1;

function outerFunc() {
  const x = 10;

  // innerFunc의 상위 스코프는 외부함수 outerFunc 스코프
  function innerFunc() {
    // innerFunc에서 자신을 포함하는 외부함수 outerFunc의 x에 접근 가능
    console.log(x);
  }

  innerFunc();
}

outerFunc(); // 10;

const y = 2;
function outer() {
  const y = 20;
  inner();
}
function inner() {
  console.log(y);
}

outer(); // 2

// 자바스크립트는 함수를 어디에 정의했는지로 스코프를 결정하는 렉시컬 스코프를 따름
const a = 1;

function foo() {
  const a = 10;
  bar();
}

function bar() {
  console.log(a);
}

foo();
bar();
