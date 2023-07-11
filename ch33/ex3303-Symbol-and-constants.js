const Direction = {
  UP: 1,
  DOWN: 2,
  LEFT: 3,
  RIGHT: 4,
  OTHER: 3,
};

const myDirection = Direction.OTHER;

if (myDirection === Direction.LEFT) {
  console.log("you are going left");
}
// 문제점 : 상수값이 변경될수 있고 다른 변수값과 중복가능

const DirectionV2 = {
  UP: Symbol("up"),
  DOWN: Symbol("down"),
  LEFT: Symbol("left"),
  RIGHT: Symbol("right"),
};

const myDirectionV2 = DirectionV2.UP;
if (myDirectionV2 === DirectionV2.UP) {
  console.log("you are going up");
}
