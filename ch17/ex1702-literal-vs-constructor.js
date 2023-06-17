// 리터럴로 객체 생성할 때 문제 : 중복
const circle1={
    radius:5,
    getDiameter(){
        return 2*this.radius;
    }
};

console.log(circle1.getDiameter());

const circle2 = {
    radius: 10,
    getDiameter(){
        return 2*this.radius;
    }
};

console.log(circle2.getDiameter());

// 생성자 함수 정의
function Circle(radius){
    this.radius = radius;
    this.getDiameter = function(){
        return 2*this.radius;
    };
}

const circleOne = new Circle(5);
const circleTwo = new Circle(10);

console.log(circleOne.getDiameter());
console.log(circleTwo.getDiameter());

// new 연산자 없으면 일반함수로 호출
const circle3 = Circle(15);
console.log(circle3); // 반환값 없으므로 undefined
// radius는 전역객체의 radius임
console.log(radius);