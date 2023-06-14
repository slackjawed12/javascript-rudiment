var num = 2;
var kind;

if (num > 0) {
    kind = '양수';
}
console.log(kind);

if (num > 0) {
    kind = '양수';
} else {
    kind = '음수';
}
console.log(kind);

if (num > 0) {
    kind = '양수';
} else if (num < 0) {
    kind = '음수';
} else {
    kind = '영';
}
console.log(kind);

// 중괄호 생략
var num = 2;
var kind;
if (num > 0) kind = '양수';
else if (num < 0) kind = '음수';
else kind = '영';
console.log(kind);

// switch
var month = 11;
var monthName;

// fall through 발생 - break문이 없기 때문
// 11월 할당 이후 12월 재할당하고 Invalid Month까지 재할당
switch (month) {
    case 1: monthName = '1월';
    case 2: monthName = '2월';
    case 3: monthName = '3월';
    case 4: monthName = '4월';
    case 5: monthName = '5월';
    case 6: monthName = '6월';
    case 7: monthName = '7월';
    case 8: monthName = '8월';
    case 9: monthName = '9월';
    case 10: monthName = '10월';
    case 11: monthName = '11월';
    case 12: monthName = '12월';
    default: monthName = 'Invalid Month';
}
console.log(monthName);

var month2 = 7;
var monthName;

// fall through 발생 - break문이 없기 때문
// 11월 할당 이후 12월 재할당하고 Invalid Month까지 재할당
switch (month2) {
    case 1: monthName = '1월';
        break;
    case 2: monthName = '2월';
        break;
    case 3: monthName = '3월';
        break;
    case 4: monthName = '4월';
        break;
    case 5: monthName = '5월';
        break;
    case 6: monthName = '6월';
        break;
    case 7: monthName = '7월';
        break;
    case 8: monthName = '8월';
        break;
    case 9: monthName = '9월';
        break;
    case 10: monthName = '10월';
        break;
    case 11: monthName = '11월';
        break;
    case 12: monthName = '12월';
        break;
    default: monthName = 'Invalid Month';
}
console.log(monthName);

// fall through가 유용한 예시 : 윤년 판별해서 2월 일수 계산하기
var year = 2000;
var month = 2;
var days = 0;

switch (month) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        days = 31;
        break;
    case 4: case 6: case 9: case 11:
        days = 30;
        break;
    case 2:
        days = ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) ? 29 : 28;
        break;
    default:
        console.log('Invalid month');
}

console.log(days);