// 배열의 요소들을 문자열로 변환해서 인수로 받은 문자열을 구분자로 연결
// 원본 배열 변경 없음
const arr = [1, 2, 3, 4, 5];

// 기본 연결자는 comma
console.log(arr.join());

console.log(arr.join(""));

console.log(arr.join(":"));
