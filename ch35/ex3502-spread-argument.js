const arr = [1, 2, 3];

// Math.max : 가변인자함수
console.log(Math.max(1));
console.log(Math.max(1, 2));
console.log(Math.max(1, 2, 3));
console.log(Math.max(arr)); // NaN

// Function.prototype.apply : 두번째 인수에 인수목록이 배열로 들어감 - 배열이 펼쳐져서 인수로 전달
console.log(Math.max.apply(null, arr));

// 스프레드 문법
console.log(Math.max(...arr));

// Rest 파라미터 : 인수 목록을 배열로 받는다.
function foo(...rest) {
  console.log(rest);
}

// 펼쳐진 것들은 rest 파라미터가 배열로 받게됨
foo(1, 2, 3);

// 스프레드 문법으로 펼침 -> rest 파라미터가 배열로 받음
foo(...[1, 2, 3]);
