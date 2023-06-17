// 함수에 객체처럼 프로퍼티를 추가함
function foo() {}

foo.prop = 10;

foo.method = function(){
    console.log(this.prop);
}

foo.method();

console.log(Object.getPrototypeOf(foo));