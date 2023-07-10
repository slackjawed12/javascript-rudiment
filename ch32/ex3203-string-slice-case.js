const str = "hello world";

console.log(str.substring(0, 5));
console.log(str.substring(2));
console.log(str.slice(0, 5));
console.log(str.slice(2));
// slice는 음수 전달 가능
console.log(str.substring(-2)); // 0 취급
console.log(str.slice(-5)); // 뒤에서 5자리 잘라냄

console.log(str.toUpperCase());
console.log(str.toLowerCase());
