function multiply(x,y){
    console.log(arguments);
    return x*y;
}
console.log(multiply());
console.log(multiply(1));
console.log(multiply(1,2));
console.log(multiply(1,2,3));

// Symbol(Symbol.iterator)

function square(x){
    const iterator = arguments[Symbol.iterator]();

    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());

    return x*x;
}

console.log(square(4, 5, 6)); // 16

// 가변인자 함수 구현 시 유용
function sum(){
    let res =0;
    for (let i=0; i<arguments.length; i++){
        res+= arguments[i];
    }

    return res;
}

console.log(sum());
console.log(sum(1,2));
console.log(sum(1,2,3));

function sumTwo(){
    const array = Array.prototype.slice.call(arguments);
    return array.reduce(function (pre, cur) {
        return pre+cur;
    }, 0);
}

console.log(sumTwo(1,2));
console.log(sumTwo(1,2,3,4,5));

function sumThree(...args){
    return args.reduce((pre, cur)=> pre+cur, 0);
}

console.log(sumThree(1,2));
console.log(sumThree(1,2,3,4,5));