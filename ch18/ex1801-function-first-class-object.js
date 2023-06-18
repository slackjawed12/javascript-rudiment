// 무명 리터럴로 생성 가능
// 변수에 저장 가능
const increase = function (num){
    return ++num;
};

const decrease = function(num){
    return --num;
};

// 객체에 저장 가능
const auxs = {increase, decrease};

// 반환값으로 사용 가능, 매개변수에 전달 가능함
function makeCounter(aux){
    let num = 0;
    return function(){
        num = aux(num);
        return num;
    };
}

const increaser = makeCounter(auxs.increase);
console.log(increaser());
console.log(increaser());

const decreaser = makeCounter(auxs.decrease);
console.log(decreaser());
console.log(decreaser());


function square(number){
    return number*number;
}

console.dir(Object.getOwnPropertyDescriptors(square));

// __proto__ 는 square 프로퍼티가 아니라 Object.prototype의 접근자 프로퍼티이다.
console.log(Object.getOwnPropertyDescriptor(square, '__proto__')); // undefined
console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'));

