const arr = [1, 2, 3];

console.log(arr.includes(2));
console.log(arr.includes(100));

// 두번째 인수 : 확인하기 시작할 인덱스. 음수이면 끝에서부터 시작
console.log(arr.includes(1, 1));
console.log(arr.includes(3, -1));

// indexOf의 문제 : 반환값 -1 체크해야함. NaN확인 불가
console.log([NaN].indexOf(NaN) !== -1);
console.log([NaN].includes(NaN));
