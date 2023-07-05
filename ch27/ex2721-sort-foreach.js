const fruits = ["banana", "orange", "apple"];
const koreanFruits = ["바나나", "오렌지", "사과"];
// 인자 없으면 문자열순으로 앞서는 기준
fruits.sort();
koreanFruits.sort();
console.log(fruits, koreanFruits);

// 순서 1 10 100 2 25 40 5 : 문자열로 변환해서 문자열 먼저오는 순서로 정렬함
console.log([40, 100, 1, 5, 2, 25, 10].sort());

// 숫자로 비교하려면 비교함수 전달
console.log([40, 100, 1, 5, 2, 25, 10].sort((a, b) => a - b));

// 객체배열
const todos = [
  { id: 4, content: "javascript" },
  { id: 1, content: "html" },
  { id: 2, content: "css" },
];

function compare(key) {
  return (a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0);
}

todos.sort(compare("id"));
console.log(todos);
todos.sort(compare("content"));
console.log(todos);

// forEach
const numbers = [1, 2, 3];
const pows = [];
numbers.forEach((item) => pows.push(item ** 2));
console.log(pows);
numbers.forEach((item, index, arr) => {
  console.log(item, index, JSON.stringify(arr));
});

// forEach로 원본배열 변경 : 세 번째 인수
numbers.forEach((item, index, arr) => {
  arr[index] = item ** 2;
});
console.log(numbers);

// forEach 반환값: undefined
const result = [1, 2, 3].forEach(() => {});
console.log(result);

// class
class Numbers {
  numberArray = [];

  // this : undefiend. strict 모드이므로
  // multiply(arr) {
  //   arr.forEach(function (item) {
  //     this.numberArray.push(item * item);
  //   });
  // }

  // forEach 두 번째 인수로 this 사용 객체 전달
  // forEach(callbackFn, thisArg)
  multiply(arr) {
    arr.forEach(function (item) {
      this.numberArray.push(item * item);
    }, this);
  }

  // 편한 방법 : 화살표함수. this arg 없으므로 상위스코프인 multiply 메서드 내부 this를 참조
  multiplyV2(arr) {
    arr.forEach((item) => this.numberArray.push(item * item));
  }
}

const numbersTwoArgs = new Numbers();
numbersTwoArgs.multiply([1, 2, 3]);
const numbersArrow = new Numbers();
numbersArrow.multiplyV2([1, 2, 3]);

// forEach 동작
if (!Array.prototype.forEach) {
  Array.prototype.forEach = function (callback, thisArg) {
    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }

    thisArg = thisArg || window;

    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}
// 기타 규칙 : break, continue 불가. 희소배열에 생략된 요소는 순회 제외
