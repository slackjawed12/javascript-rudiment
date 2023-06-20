const str = "hello";

console.log(str.length);
console.log(str.toUpperCase());

// 래퍼 객체에 name 프로퍼티 동적 추가
// 래퍼객체 참조 없으면 바로 gc됨
str.name = "lee";
console.log(str.name); // undefined
