console.log(new Date());

// enw 연산자 없이 Date를 호출하면 문자열 반환 : UTC+9
console.log(Date());

// 유닉스 타임 인수로
console.log(new Date(0));
console.log(new Date(86400000));

// 시간정보 여러개를 인수로 : 월은 0부터 11까지이므로 3월, UTC 지정안했으므로 -9
console.log(new Date(2022, 2, 9, 0, 0, 0, 0));

// 문자열을 인수로 받기
// UTC 지정 안함 : 현지시각 기준이 되므로 -9 한 값이 나옴
console.log(new Date("2023/07/07/10:00:00"));
// UTC 기준으로 지정 : UTC 표준이므로 시각 그대로 나옴
console.log(new Date("2023/07/07/10:00:00Z"));
// YYYY-MM-DD의 형태는 UTC로 간주한다.
console.log(new Date("2023-07-07"));
