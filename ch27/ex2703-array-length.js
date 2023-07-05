const arr = [1, 2, 3];
console.log(arr.length);

arr.push(4);
console.log(arr);
console.log(arr.length);

arr.pop();
console.log(arr);
console.log(arr.length);

// 더 작은 length 프로퍼티
const arrFive = [1, 2, 3, 4, 5];
arrFive.length = 3;
// 인덱스 3, 4가 아예 없어진다.
console.log(Object.getOwnPropertyDescriptors(arrFive));
console.log(arrFive);

// 더 큰 length 프로퍼티 : 실제 배열의 길이가 늘어나지는 않는다.
arrFive.length = 5;
console.log(Object.getOwnPropertyDescriptors(arrFive));
console.log(arrFive);
