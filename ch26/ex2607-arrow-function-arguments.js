(function () {
  const foo = (x, y) => console.log(arguments);
  // 화살표 함수의 arguments는 상위스코프의 arguments임
  // 자신에게 전달된 인수를 참조할 수 없음.
  foo(3, 4);
})(1, 2);

const foo = () => console.log(arguments);
foo(1, 2);
