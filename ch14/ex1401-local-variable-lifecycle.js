function foo(){
    var x = 'local';
    console.log(x);
    return x;
}

foo();
// console.log(x); // ReferenceError

var a = 'global';
function bar() {
    console.log(a);     // 결과 : undefined
    var a = 'local';
}

bar();
console.log(a);