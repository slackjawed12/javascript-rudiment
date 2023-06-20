isNaN(NaN);
isNaN(10);
isNaN("dsfoaij");
isNaN("10");
isNaN(""); // false : 빈 문자열, 공백만 있으면 0으로 평가
isNaN(true);
isNaN(null);
isNaN(undefined);
// date
isNaN(new Date()); // false
isNaN(new Date().toString());
