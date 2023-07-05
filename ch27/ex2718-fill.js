// 인수로 받은 값을 끝까지 채움. 원본 변경
const arr = [1, 2, 3];
arr.fill(0);
console.log(arr);

// 두 번째 인수 : 채우기 시작할 인덱스
const arrV2 = [1, 2, 3];
arrV2.fill(0, 1);
console.log(arrV2);

// 세 번째 인수 : 채우기 멈출 인덱스(exclude)
const arrV3 = [1, 2, 3, 4, 5];
arrV3.fill(0, 1, 3);
console.log(arrV3);

// 활용 : 배열 생성할 때 특정 값으로 채우기
const arrV4 = new Array(3);
console.log(arrV4);

const result = arrV4.fill(1);
console.log(arrV4);
console.log(result);

// 권장 : Array.from
const sequences = (length = 0) => Array.from({ length }, (_, i) => i);
console.log(sequences(3));
