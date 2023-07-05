// 원본배열 직접 변경해서 삭제
const arr = [1, 2, 3, 4, 5, 6, 7];

// 1부터 2개의 요소 제거 후 20, 30 추가
const result = arr.splice(1, 2, 20, 30);
console.log(result); // 반환값은 제거한 요소들의 배열
console.log(arr); // 원본 변경

// 제거요소 개수가 0이면 제거없음
const resultTwo = arr.splice(1, 0, 100);

console.log(arr);
console.log(resultTwo);

// 추가요소 없으면 제거만 수행
const arrV2 = [1, 2, 3, 4];
const resultV2 = arrV2.splice(1, 2);
console.log(arrV2);
console.log(resultV2);
console.log(Object.getOwnPropertyDescriptors(arrV2));

// 제거 요소 수 생략하면 시작인덱스부터 모두 제거
const arrV3 = [1, 2, 3, 4, 5, 6];
const resultV3 = arrV3.splice(3);
console.log(arrV3);
console.log(resultV3);

// 특정 요소의 제거 : indexOf로 인덱스를 찾고 splice 사용
const arrV4 = [1, 2, 3, 4, 5, 6, 7, 8];
function remove(array, item) {
  const index = array.indexOf(item);

  if (index !== -1) {
    array.splice(index, 1);
  }
  return array;
}

console.log(remove(arrV4, 2));
console.log(remove(arrV4, 20));

// 추천 : filter로 솎아내기
const arrV5 = [1, 2, 3, 1, 2];
function removeAll(array, item) {
  return array.filter((v) => v !== item);
}

console.log(removeAll(arrV5, 2));
