const str = "How are you doing?";

console.log(str.split(" "));
console.log(str.split(" ", 3));
console.log(str.split(/\s/));
console.log(str.split(""));
console.log(str.split()); // 단일요소 배열 반환

// 문자열 역순으로 뒤집기
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("hello world!"));
