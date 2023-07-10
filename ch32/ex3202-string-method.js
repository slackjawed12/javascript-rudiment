const str = new String("foo");
console.log(Object.getOwnPropertyDescriptors(str));

// string 객체는 원본 String 객체를 직접 변경하는 메서드는 없음 : read only

// indexOf : 인수로 전달받은 문자열 검색. 첫번째 인덱스 반환. 없으면 -1
const target = "hello world";
console.log(target.indexOf("l"));
console.log(target.indexOf("or"));
console.log(target.indexOf("x"));
console.log(target.indexOf("world!"));

// 검색 시작 인덱스
console.log(target.indexOf("l", 3));

// 비슷한 활용 : includes
console.log(target.includes("hello"));
console.log(target.includes(""));
console.log(target.includes("or"));
console.log(target.includes("x"));
console.log(target.includes());
console.log(target.includes("l", 3));
console.log(target.includes("h", 3));

// search : 정규표현식과 매치하는 문자열 검색해서 인덱스 반환
console.log(target.search(/o/));
console.log(target.search(/wo/));
console.log(target.search(/x/));

// startsWith
console.log(target.startsWith("he"));
console.log(target.startsWith("hello "));
console.log(target.startsWith("x"));
console.log(target.startsWith("wo", 6));

// endsWith
console.log(target.endsWith("rld"));
console.log(target.endsWith("x"));
// 처음부터 5번째자리까지(인덱스 아님) 문자열이 llo로 끝나는지 확인
console.log(target.endsWith("llo", 5));

// chatAt : 인덱스에 위치한 문자를 검색해서 반환
for (let i = 0; i < target.length; i++) {
  console.log(target.charAt(i));
}

// 문자열 범위 넘은 경우 : 빈문자열 반환
console.log(target.charAt(23));

// substring
console.log(target.substring(1, 4));
console.log(target.substring(1));

// 예외적인 상황에서 규칙
// 1. 큰 숫자이면 교환
console.log(target.substring(4, 1)); //교환

// 2. 음수거나 NaN이면 0으로 취급
console.log(target.substring(-2)); // 0으로 취급
console.log(target.substring(NaN)); // 0으로 취급
console.log("target.substring(4, NaN):", target.substring(4, NaN)); // 0으로 취급 후 교환

// 3. 인수 > str.length이면 str.length로 취급
console.log(target.substring(1, 100));
console.log(target.substring(20));

// 응용 : indexOf와 같이 사용 - 공백 기준으로 앞에 있는 문자열 받기
console.log(target.substring(0, target.indexOf(" ")));
console.log(target.substring(target.indexOf(" ") + 1, target.length));
