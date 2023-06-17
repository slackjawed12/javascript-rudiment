// 생성자 함수의 인스턴스 생성 과정
function Circle(radius){
    // 암묵적으로 인스턴스가 생성되고 this에 바인딩됨
    console.log(this);

    // this에 바인딩된 인스턴스 초기화
    this.radius = radius;
    this.getDiameter = function(){
        return 2*this.radius;
    };

    // 바인딩된 this 반환
    // return문으로 객체를 반환하면 암묵적인 this 반환 무시
    // return {};
    // return문으로 원시값을 반환하면 무시하고 this 반환
    // return 10;
}

const circle1 = new Circle(5);
console.log(circle1);


