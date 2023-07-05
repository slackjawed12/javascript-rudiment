const arr = [1, 2];

console.log(arr[2]); // undefined
// 존재하지 않는 프로퍼티에 접근한것임

// 추가
const arr2 = [0];
arr2[1] = 1;
arr2[100] = 100; // 희소배열
console.log(arr2);
console.log(arr.length);
console.log(Object.getOwnPropertyDescriptors(arr2));

// 갱신
arr2[1] = 10;
console.log(arr2);

// 다양한 방식의 추가 : integer로 parse될 수 있는것은 인덱스로 추가되고 length늘어남. 그 외의것은 프로퍼티가 생성.
const arrV3 = [];
arrV3[0] = 1;
arrV3["1"] = 2;

arrV3["foo"] = 3;
arrV3.bar = 4;
arrV3[1.1] = 5;
arrV3[-1] = 6;
arrV3["2"] = 13;
console.log(arrV3);
console.log(arrV3.length);

// 삭제 : delete 연산자 - 프로퍼티 삭제하는 것임
// 주의 : length가 줄어들지는 않는다.
const arrV4 = [1, 2, 3];

delete arrV4[1];
console.log(arrV4);
console.log(arrV4.length);

// 삭제는 splice 메서드를 사용하길 권장
const arrV5 = [1, 2, 3, 4, 5];
// arr[1]부터 2개 요소 제거
arrV5.splice(1, 2);
console.log(arrV5);
console.log(arrV5.length);
