function multiply(x, y){
    return x*y;
}

var result = multiply(3,5);
console.log(result);

// 
function multiply(x,y){
    return x*y;
    console.log('실행X');
}
console.log(multiply(3,5));

function foo(){
    return;
}

console.log(foo());

function foo(){

}

console.log(foo());

// asi에 의해 세미콜론이 return에 추가된다.
function multiply(x, y){
    return
    x*y;
}

console.log(multiply(3,5));
