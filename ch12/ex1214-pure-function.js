// 순수함수
var count = 0;

function increase(n){
    return ++n;
}

count = increase(count);
console.log(count);

count = increase(count);
console.log(count);

// 비순수함수
var countTwo = 0;
// 외부 상태를 변경함
function increaseTwo(){
    // 함수 내부에서 외부 상태를 직접 참조함
    return ++countTwo;
}

increaseTwo();
console.log(countTwo);

increaseTwo();
console.log(countTwo);