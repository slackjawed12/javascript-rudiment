// 일반적 함수 호출
function foo(){
    console.log(this);
}

// this는 전역객체를 가리킨다
foo();

const obj = {name: 'obj', foo}; // 프로퍼티 축약 표현
obj.foo(); // this는 메서드를 호출한 객체를 가리킨다

// 생성자 함수로 호출
const inst = new foo();