// 인수로 전달된 범위의 요소를 복사해서 배열로 반환 : 원본 배열 변경 없음
const arr = [1, 2, 3, 4];
// 두번째 인수 인덱스는 exclude임
console.log(arr.slice(0, 1));

console.log(arr.slice(1, 2));

console.log(arr);

// 두번째 인수 생략
const arrV2 = [1, 2, 3, 4, 5];
console.log(arrV2.slice(1));

// 첫 번째 인수가 음수 : 끝에서부터 이동한뒤, 마지막 인덱스까지 복사
const arrV3 = [1, 2, 3, 4, 5, 6, 7];
console.log(arrV3.slice(-1));
console.log(arrV3.slice(-2));
console.log(arrV3.slice(-3));

// 아무 인수도 없음 : 얕은 복사 생성해서 반환
const arrV4 = [1, 2, 3, 4];
const copy = arrV4.slice();
console.log(copy === arr);

// 생성된 복사본은 얕은 복사를 통해 생성된다.
const todos = [
  { id: 1, content: "HTML", completed: false },
  { id: 2, content: "CSS", completed: true },
  { id: 3, content: "JavaScript", completed: false },
];

// shallow copy
const _todos = todos.slice();
console.log(_todos === todos); // false : 객체배열 자체는 별개의 객체이다.
console.log(_todos[0] === todos[0]); // true : 배열요소의 참조값은 같다
todos[0]["content"] = "Java";
console.log(_todos[0]["content"]); // Java. 얕은복사이므로 같이 변경된다.

// 깊은복사하려면 lodash cloneDeep 사용
// 복사본 생성 이용
function sum() {
  // 유사배열객체를 배열로 변환
  var arr = Array.prototype.slice.call(arguments);
  console.log(arr);

  return arr.reduce(function (pre, cur) {
    return pre + cur;
  }, 0);
}

console.log(sum(1, 2, 3, 4, 5));

// from 메서드로 유사배열객체를 객체로 변환
function sumV2() {
  const arr = Array.from(arguments);
  console.log(arr);
  return arr.reduce((pre, cur) => pre + cur, 0);
}

console.log(sumV2(1, 2, 3, 4));

// 스프레드 문법
function sumV3() {
  const arr = [...arguments];
  console.log(arr);

  return arr.reduce((pre, cur) => pre + cur, 0);
}

console.log(sumV3(1, 2, 3, 4, 5, 6));
