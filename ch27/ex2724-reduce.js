// 첫번째 : 콜백함수, 두번째 : 초기값
// 콜백함수 반환값이 다음 순회에서 콜백함수 첫번째 인수가 된다.
// 콜백함수의 인수 : 콜백함수 이전반환값(acc), 요소값, 인덱스, this
const sum = [1, 2, 3, 4].reduce((acc, cur, index, arr) => acc + cur, 0);
console.log(sum);

// 평균 구하기
const values = [1, 2, 3, 4, 5, 6, 7];
const average = values.reduce((acc, cur, i, { length }) => {
  return i === length - 1 ? (acc + cur) / length : acc + cur;
}, 0);
console.log(average);

// 최댓값
const valuesV2 = [1, 2, 3, 4, 5];
const max = valuesV2.reduce((acc, cur) => (acc > cur ? acc : cur), -Infinity);
console.log(max);
// Math.max 이용
console.log(Math.max(...valuesV2));

// 중복 횟수 : python의 counter
const valuesV3 = [1, 1, 1, 1, 3, 3, 3, 4, 5, 5, 5, 7, 7, 7, 7, 7];
const count = valuesV3.reduce((acc, cur) => {
  acc[cur] = acc[cur] || 0 + 1;
  return acc;
}, {});
console.log(count);

// 평탄화
const valuesV4 = [1, [2, 3], 4, [5, 6]];
const flatten = values.reduce((acc, cur) => acc.concat(cur), []);
console.log(flatten);
// flat 이용
console.log([1, [2, 3, 4, 5]].flat());
console.log([1, [2, 3, [4, 5]]].flat(2));

// 중복 제거
const valuesV5 = [1, 2, 1, 3, 5, 4, 5, 3, 4, 4];
const result = valuesV5.reduce(
  (unique, val, i, _values) =>
    _values.indexOf(val) === i ? [...unique, val] : unique,
  []
);

console.log(result);

// 초기값 생략 가능하지만 전달 권장
// const sumError = [].reduce((acc, cur) => acc + cur);
const sumRight = [].reduce((acc, cur) => acc + cur, 0);
console.log("sumRight:", sumRight);

// 프로퍼티 값 합산하기
const products = [
  { id: 1, price: 100 },
  { id: 2, price: 200 },
  { id: 3, price: 300 },
];

// 초기값 없으면 NaN
const priceSumWrong = products.reduce((acc, cur) => acc.price + cur.price);
console.log(priceSumWrong);
const priceSumRight = products.reduce((acc, cur) => acc + cur.price, 0);
console.log(priceSumRight);
