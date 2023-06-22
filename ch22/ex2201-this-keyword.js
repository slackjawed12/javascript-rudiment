const circle = {
  radius: 5,
  getDiameter() {
    // radius를 참조하려면 자신이 속한 객체인 circle을 찾을 수 있어야 함
    // 리터럴 방식으로 생성하면 식별자를 재귀적으로 참조하게 됨
    return 2 * circle.radius;
  },
};

// this 사용
const circleV2 = {
  radius: 10,
  getDiameter() {
    return 2 * this.radius;
  },
};
