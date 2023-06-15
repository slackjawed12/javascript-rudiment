// 전역변수 억제하기
// 1. 즉시실행함수
(function(){
    var foo = 10;
}());

// 2. 네임스페이스 객체
// 전역에 네임스페이스 역할 담당할 객체 생성 후
// 전역변수처럼 쓰고 싶은 변수를 프로퍼티로 추가
// 객체가 전역변수에 할당되어 유용하진 않다.
var MYAPP = {}; // 전역 네임스페이스 객체

MYAPP.name = 'lee';

console.log(MYAPP.name);

// 계층적으로 객체를 프로퍼티로 추가하기
MYAPP.person = {
    name: 'lee',
    address: 'seoul'
};

console.log(MYAPP.person.address);

// 3. 모듈 패턴
var Counter = (function(){
    // private 변수
    var num =0;
    // 외부로 공개할 데이터 혹은 메서드는 프로퍼티로 추가한 객체로 반환하면 된다.
    return {
        increase(){
            return ++num;
        },
        decrease(){
            return --num;
        }
    }
}());

console.log(Counter.increase());
console.log(Counter.increase());
console.log(Counter.decrease());
console.log(Counter.decrease());
console.log(Counter.num);   // undefined. 프로퍼티로 없기 때문