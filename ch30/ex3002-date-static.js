// 현재시각에 해당하는 유닉스 타임 정수를 반환
const now = Date.now();
console.log(now);

// 해당 정수로 Date 객체 생성
console.log(new Date(now));

// Date.parse (비권장)

// utc
console.log(Date.parse("Jan 2, 1970 00:00:00 UTC")); // 86400000

// UTC 키워드 생략했으므로 로컬시간으로 해석 : 86400000
console.log(Date.parse("Jan 2, 1970 09:00:00"));

// local
console.log(Date.parse("1970/01/02/09:00:00"));

// utc(gmt)
console.log(Date.parse("1970/01/02/09:00:00Z"));
console.log(Date.parse("1970/01/02/09:00:00 UTC"));

// Date.UTC : 밀리초를 숫자로 반환. 로컬타임이 아닌 UTC로 인식함
// 인수는 year, month, day, hour, minute, second, millsec
// 월이 0부터 시작하므로 1970 1월 2일 시각이 나옴
console.log("Date.UTC of 1970 1 2 : ", Date.UTC(1970, 0, 2));
console.log(
  "Date.UTC of 1970 1 2 15 30 45 : ",
  Date.UTC(1970, 0, 2, 15, 30, 45)
);
