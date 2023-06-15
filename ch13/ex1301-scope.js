// 함수 매개변수의 스코프
function add(x,y){
    console.log(x,y);
    return x+y;
}

add(2,5);
// console.log(x,y); // error

var var1=1;
if(true){
    var var2=2;
    if(true){
        var var3=3;
    }
}

function foo(){
    var var4 = 4;
    function bar(){
        var var5=5;
    }
}

var x = 'global';

function foo(){
    var x = 'local';
    console.log(x);
}

foo();

console.log(x);

// var 중복 선언
function foo(){
    var x = 1;
    var x = 2;
    console.log(x);
}

function bar(){
    let x = 1;
    // let x =2;
}