function sum(x, y) {
  return x + y;
}
console.log(sum(1)); // NaN

function sumV2(x, y) {
  x = x || 0;
  y = y || 0;
  return x + y;
}

console.log(sumV2(1, 2));
console.log(sumV2(1));

// ES6 매개변수 기본값 : 인수 전달하지 않거나 undefined 전달한 경우
function sumV3(x = 0, y = 0) {
  console.log(x, y);
  return x + y;
}

console.log(sumV3(1, 2));
console.log(sumV3(1));
console.log(sumV3(2, null)); // 2+null=2

function logName(name = "lee") {
  console.log(name);
}

logName();
logName(undefined);
logName(null);

// rest에는 기본값 지정 불가
// function foo(...rest =[]){

// }
// 일부에 디폴트 사용
// length property는 디폴트 선언된것만큼 줄어든다.
// arguments 객체에 영향 없음
function sumV4(x, y = 0) {
  console.log(arguments);
}

console.log(sumV4.length); // 1

sumV4(1); // y = 0 나오지 않는다.
sumV4(1, 2);
