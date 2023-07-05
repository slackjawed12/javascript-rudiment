// reverse : 원본배열 변경됨. 참조도 같아서 매우 비권장.
const arr = [1, 2, 3, 4, 5, 6];
const result = arr.reverse();
console.log(arr);
console.log(result);

result.push(0);
console.log(arr); // 같은 참조이므로, 원본 배열에도 0이 추가된다
console.log(result);

// 권장 방식 : 새로운 복사본을 만들어야 한다.
const arrV2 = [1, 2, 3, 4, 5, 6];
const resultV2 = [...arrV2];
resultV2.reverse();
console.log(arrV2);
console.log(resultV2);

// ES2023 : toReversed() 사용가능
