const arrayLike = {
  0: 1,
  1: 2,
  2: 3,
  length: 3,
};

// 유사배열객체를 for loop로 순회
for (let i = 0; i < arrayLike.length; i++) {
  console.log(arrayLike[i]); // 인덱스 접근
}

// for ... of 로 순회 불가능
// for (const item of arrayLike) {
//   console.log(item);
// }

// 유사배열객체면서 이터러블 : arguments, NodeList, HTMLCollection

// Array.from 으로 유사배열객체나 이터러블을 배열로 변환
const converted = Array.from(arrayLike);
console.log(converted);
