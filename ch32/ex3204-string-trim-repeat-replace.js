const str = "       fo       ";
// 앞뒤 공백 자름
console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());
// replace로 공백 제거
console.log(str.replace(/\s/g, ""));
console.log(str.replace(/^\s+/g, "")); // trimStart
console.log(str.replace(/\s+$/g, "")); // trimEnd

// 반복
const str2 = "abc";
console.log(str2.repeat());
console.log(str2.repeat(0));
console.log(str2.repeat(1));
console.log(str2.repeat(2));
console.log(str2.repeat(2.5)); // repeat(2)
// console.log(str2.repeat(-1)); // RangeError

const str3 = "Hello world, world";
console.log(str3.replace("world", "kim")); // 첫 검색 문자열만 치환
// 교체패턴 : $& - 검색된 문자열
console.log(str3.replace("world", "<strong>$&</strong>"));

// 첫번째 인수로 정규표현식 전달
const str4 = "Hello Hello";
console.log(str4.replace(/hello/gi, "kim"));

// 두번째 인수로 치환함수 전달
function camelToSnake(camelCase) {
  return camelCase.replace(/.[A-Z]/g, (match) => {
    console.log(match);
    return match[0] + "_" + match[1].toLowerCase();
  });
}

const camelCase = "userInsightUpdate";
console.log("camel to snake : ", camelToSnake(camelCase));

function snakeToCamel(snakeCase) {
  return snakeCase.replace(/_[a-z]/g, (match) => {
    console.log(match);
    return match[1].toUpperCase();
  });
}

const snakeCase = "user_info_table";
console.log("snake to camel : ", snakeToCamel(snakeCase));
