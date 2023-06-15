function add(x, y) {
    return x + y;
}

add(2, 5);

// 변수에 함수 리터럴을 할당
var f = function add(x, y) {
    return x + y;
};

/* 함수 선언문 */
function sum(x, y) {
    return x + y;
}

// 선언문은 이름 생략 불가
// function (x, y) {
//     return x - y;
// }

// 함수를 참조하기 
console.dir(sum);

// 함수 호출하기
console.log(sum(2, 5));

var x = function sub(x, y){
    return x-y;
}
console.log(x(2,5));
