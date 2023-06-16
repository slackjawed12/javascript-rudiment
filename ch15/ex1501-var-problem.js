// var 키워드 변수의 문제점 : 변수 중복 선언 허용 - 재할당 부작용
var x =1;
var y =1;

var x =100;
// 초기화문 없는 선언문은 무시
var y;

console.log(x);
console.log(y);

// 문제점 2 : 함수 레벨 스코프 - 함수 외부 var 키워드 변수는 코드 블록에서 선언해도 전역변수
var x = 1;
// if문
if(true){
    var x = 10;
}

console.log(x);

// for문
var i =10;
for(var i=0; i<5; i++){
    console.log(i);
}

console.log(i);

// 문제 3 : 변수 호이스팅
console.log(foo);
foo = 123;
console.log(foo);
var foo;
