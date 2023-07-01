function foo(...rest) {
  console.log(rest);
}

foo(1, 2, 3, 4, 5);

// 일반 매개변수와 rest 파라미터 같이 사용 : 순차 할당됨
function fooV2(param, ...rest) {
  console.log(param);
  console.log(rest);
}

fooV2(1, 2, 3, 4, 5);

// rest parameter는 마지막 파라미터여야 한다.
// function foo(...rest, param1, param2)
// rest parameter는 하나여야한다.
// function foo(...rest1, ...rest2)

// function object의 length 프로퍼티에 영향 주지 않음
function af(x, y, z) {}
console.log(af.length);
function bf(...rest) {}
console.log(bf.length);
function cf(x, ...rest) {}
console.log(cf.length);
function df(x, y, ...rest) {}
console.log(df.length);

// arguments 객체와 비교
function sum() {
  console.log(arguments);
}
sum(1, 2);
// arguments 객체의 문제 : 배열메서드 사용시 call, apply 사용 필요
function sum() {
  let array = Array.prototype.slice.call(arguments);
  return array.reduce(function (pre, cur) {
    return pre + cur;
  }, 0);
}

console.log(sum(1, 2, 3, 4, 5));

// rest 파라미터 : 가변인자 목록을 직접 배열로 전달받음
function sumV2(...args) {
  return args.reduce((pre, cur) => pre + cur, 0);
}

console.log(sum(1, 2, 3, 4, 5));
// arrow 함수로 가변인자 함수 구현 시에는 무조건 rest 파라미터
const sumV3 = (...args) => args.reduce((pre, cur) => pre + cur, 0);
console.log(sumV3(1, 2, 3, 4, 5));
