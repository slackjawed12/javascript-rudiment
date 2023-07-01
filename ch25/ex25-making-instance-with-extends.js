class Rectangle {
  constructor(width, height) {
    // 코드 평가 단계 : 암묵적으로 빈 객체 인스턴스가 생성되고 this 바인딩
    this.width = width;
    this.height = height;
    console.log("new target : ", new.target);
    console.log("super this : ", this);
  }

  getArea() {
    return this.width * this.height;
  }

  toString() {
    return `witdh=${this.width}, height = ${this.height}`;
  }
}

class ColorRectangle extends Rectangle {
  constructor(width, height, color) {
    super(width, height); // super의 constructor가 super 프로퍼티까지 초기화한 인스턴스 반환
    // 인스턴스 초기화
    this.color = color;

    // 인스턴스 반환
    console.log("sub this : ", this); // width, height, color
  }

  // 오버라이딩
  toString() {
    return super.toString() + `, color = ${this.color}`;
  }
}

const colorRectangle = new ColorRectangle(2, 4, "red");
console.log(colorRectangle);

console.log(colorRectangle.getArea());
console.log(colorRectangle.toString());
