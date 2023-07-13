const arr = [1, 2].concat([3, 4]);
console.log(arr);

// spread 문법으로 배열을 펼침
const arrV2 = [...[1, 2], ...[3, 4]];
console.log(arrV2);

const arr1 = [1, 4];
const arr2 = [2, 3];
// arr1.splice(1, 0, arr2); 결과 : [1, [2,3], 4]
// console.log(arr1);

// [1,0].concat(arr2) : [1,0,2,3] -> 두번째 인수로 전달되면서 splice(1,0,2,3) 으로 작동
// Array.prototype.splice.apply(arr1, [1, 0].concat(arr2));
console.log(arr1);

// 스프레드 문법
arr1.splice(1, 0, ...arr2);
console.log(arr1);

// 배열 복사 - slice(), spread syntax
// 복사는 모두 얕은복사해서 새로운 복사본 생성
const origin = [1, 2, 3];
const copy = origin.slice();
console.log(copy);
console.log(copy === origin);

const originV2 = [1, 2];
const copyV2 = [...originV2];

console.log(copyV2);
console.log(copy === originV2);

// Iterable + not Iterable을 배열로 변환하기
// Function.prototype.apply, Function.prototype.call
function sum() {
  // arguments : 이터러블, 유사배열객체 - 배열로 변환
  const args = Array.prototype.slice.call(arguments);

  return args.reduce(function (pre, cur) {
    return pre + cur;
  }, 0);
}

console.log(sum(1, 2, 3));

// 이터러블이 아닌 유사배열 객체를 배열로
const arrayLike = {
  0: 1,
  1: 2,
  2: 3,
  length: 3,
};
console.log(arrayLike);
const arrayLikeToArray = Array.prototype.slice.call(arrayLike);
console.log(Array.isArray(arrayLikeToArray));
console.log(arrayLikeToArray);

// 스프레드 문법으로 이터러블을 배열로 변환
function sumSpread() {
  return [...arguments].reduce((prev, cur) => prev + cur, 0);
}

console.log(sumSpread(1, 2, 3));
console.log(sumSpread());
// 스프레드 문법은 이터러블이 아니면 쓸 수 없음
// const arrayLikeToArrayV2 = [...arrayLike]; typeError
// non-iterable을 배열로 바꾸는 법 : Array.from
const arrayLikeToArrayV2 = Array.from(arrayLike);
console.log("arrayLikeToArrayV2 : ", arrayLikeToArrayV2);
const sumRest = (...args) => args.reduce((prev, cur) => prev + cur, 0);
console.log("sumRest : ", sumRest(1, 2, 3, 4, 5));
