// 현지시각 기반으로 날짜정보를 추출하는 메서드
// getFullYear, getMonth, getDate, getDay
// 유닉스타임은 UTC 기준 시간 -9 한 값이 나오지만, 각 메서드에서는 현지시각 바탕으로 정보를 반환함
const one = new Date("2023/07/07 07:45:30");
console.log(one);
console.log("year:", one.getFullYear());
console.log("month:", one.getMonth()); // 6
console.log("date:", one.getDate());
// getDay : 일월화수목금토. 0부터 6까지.
console.log("dayOfWeek:", one.getDay());
// one이 UTC 시각이면 +9가 된 값이 나오고, 현지시각 문자열로 초기화됐으면 그대로 나온다.
console.log("hour:", one.getHours());
console.log("minutes:", one.getMinutes());
console.log("seconds:", one.getSeconds());
console.log("milliseconds:", one.getMilliseconds());

// set -- Date 객체의 연, 월, 일 설정하는 메서드
// 현지시각 바탕으로 설정 이뤄짐
// 예를 들어, 아래 setDate(14) 이후 유닉스타임은 2000년 10월 13일 15시
// 이후 setHours(22) 하면 유닉스타임 기반으로 2000년 10월 13일 22시가 아니라, 2000년 10월 14일 13시가 됨.
const today = new Date("2023-07-07 00:00:00");
today.setFullYear(2000); // 2000년 7월 6일 15시
today.setMonth(11); // 2000년 10월 6일 15시
today.setMonth(9, 10);
console.log("after setMonth(9,10):", today); // 2000년 10월 9일 15시
today.setDate(14);
console.log("after setDate(14):", today); // 2000년 10월 13일 15시
today.setHours(22);
console.log("after setHours(22):", today); // 2000년 10월 14일 13시
today.setMinutes(45);
console.log("after setMinutes(45):", today); // 2000년 10월 14일 13시 45분
today.setSeconds(30);
console.log("after setSeconds(30):", today); // 2000년 10월 14일 13시 45분 30초
today.setMilliseconds(500);
console.log("after setMilliseconds(500):", today); // 2000년 10월 14일 13시 45분 30초

// set으로 변경한 이후 현지시각 정보 반환하면?
console.log(today.getFullYear());
console.log(today.getFullYear());
console.log(today.getFullYear());
console.log(today.getFullYear());

// getTime : 19700101에서 경과된 밀리초
console.log(today.getTime());

// setTime : 19700101에서 경과된 밀리초 설정
const newDay = new Date();
newDay.setTime(86400000);
console.log(newDay);

// getTimezoneOffset
const a = new Date();
console.log(a.getTimezoneOffset()); // -540 : 60*9에 해당

// to String : 현지시각 기반
console.log(a.toString());
console.log(a.toTimeString());
console.log(a.toLocaleString("ko-KR"));
console.log(a.toLocaleString());
console.log(a.toLocaleTimeString("ko-KR"));

// to String : UTC기반
console.log(a.toISOString());

const b = new Date("2023-07-07T12:00:00");
console.log(b.toString());
