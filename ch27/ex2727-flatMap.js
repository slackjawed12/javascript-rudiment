const arr = ["hello", "world"];

console.log(arr.map((x) => x.split("")).flat());

// map 이후 flat을 순차적으로 실행하는 효과
console.log(arr.flatMap((x) => x.split("")));

// 깊이를 지정하려면 map -> flat 순차 호출
