function add(x,y){
    return x+y;
}

// 생성자로 의도하지 않았지만 new 연산자와 함께 호출
let inst = new add();
// 함수가 객체를 반환한 것이 아니므로 무시되고, this 바인딩 된 빈 객체를 반환함
console.log(inst);

function createUser(name, role){
    return {name, role};
}

inst = new createUser('lee', 'admin');
// 생성한 객체를 반환함
console.log(inst);

function Circle(radius){
    this.radius=radius;
    this.getDiameter=function(){
        return 2*this.radius;
    };
}

// 생성자 함수를 new 없이 호출 : this는 전역 객체를 가리킨다
// radius와 getDiameter()가 전역 객체의 프로퍼티, 메서드가 됨
const circle = Circle(5);
console.log(circle);
console.log(radius);
console.log(getDiameter());

// circle.getDiameter();

// new.target
function CircleTwo(radius){
    if(!new.target){
        return new CircleTwo(radius);
    }

    this.radius = radius;
    this.getDiameter = function(){
        return 2*this.radius;
    }
}

const circle2 = CircleTwo(5);
console.log(circle2.getDiameter());