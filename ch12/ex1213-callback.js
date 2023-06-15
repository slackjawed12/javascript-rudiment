// 콜백함수

// 어떤 일을 n번 반복하는 함수
function repeat(n) {
    for (var i = 0; i < n; i++) {
        console.log(i);
    }
}

repeat(5);

function repeat2(n) {
    for (var i = 0; i < n; i++) {
        if (i % 2) console.log(i);
    }
}

repeat2(5);

// 콜백
function repeatHOF(n, f){
    for(var i =0; i<n; i++){
        f(i);
    }
}

var logAll = function(i){
    console.log(i);
}

repeatHOF(5, logAll);

var logOdds = function(i){
    if(i%2) console.log(i);
}

repeatHOF(5, logOdds);

// 익명함수 리터럴 콜백 : 단점 - 호출할 때마다 콜백함수가 생성됨
repeatHOF(5, function(i) {
    if(i%2 == 0) console.log(i);
})

// 콜백 함수 사용한 이벤트 처리 예시
// document.getElementById('myButton').addEventListener('click', function(){
//     console.log('button clicked!');
// })

// 콜백 이용한 비동기 처리
setTimeout(function(){
    console.log('1초 경과');
}, 1000);

// 배열 고차함수
var res = [1,2,3].map(function(item){
    return item*2;
});

console.log(res);

res = [1,2,3].filter(function(item){
    return item%2;
});

console.log(res);

res = [1,2,3].reduce(function(acc, cur){
    return acc+cur;
}, 0);

console.log(res);