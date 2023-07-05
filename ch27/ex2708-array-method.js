// push : 직접 원본배열 변경
const arr = [1];

arr.push(2);
console.log(arr);

// concat : 새로운 배열 생성해서 반환
const result = arr.concat(3);
console.log(arr);
console.log(result);

// 정적메서드 isArray
// true
console.log(Array.isArray([]));
console.log(Array.isArray([1, 2]));
console.log(Array.isArray(new Array()));
console.log(Array.isArray([1, , 3]));

// false
console.log(Array.isArray());
console.log(Array.isArray({}));
console.log(Array.isArray(null));
console.log(Array.isArray(undefined));
console.log(Array.isArray(1));
console.log(Array.isArray("array"));
console.log(Array.isArray(true));
console.log(Array.isArray(false));
console.log(Array.isArray({ 0: 1, length: 1 }));

// indexOf : 검색해서 있으면 해당 인덱스, 없으면 -1 반환
const arrV2 = [1, -3, -5, 2, 2, 2, 2, 3, 4, 5, 9];
console.log(arrV2.indexOf(2));
console.log(arrV2.indexOf(6)); // -1
console.log(arrV2.indexOf(2, 2)); // 3
console.log(arrV2.indexOf(2, 7)); // -1

const foods = ["apple", "banana", "orange"];
if (foods.indexOf("orange") === -1) {
  foods.push("orange");
}
console.log(foods);

// includes : ES7
if (!foods.includes("orange")) {
  foods.push("orange");
}
