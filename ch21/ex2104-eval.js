const x = 1;
// strict mode에서 eval
function foo() {
  "use strict";

  eval("var x = 2; console.log(x);");
  console.log(x); // 1
}

foo();
// console.log(x);

const y = 1;
function bar() {
  eval("var y=2; console.log(y);");
  // let, const 키워드 사용 시 strict mode 적용
  eval("const y = 3; console.log(y);");
  console.log(y);
}

bar();
console.log(y);
