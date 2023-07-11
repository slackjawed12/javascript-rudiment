// 객체동결 + Symbol 값으로 enum 구현
const Direction = Object.freeze({
  UP: Symbol("up"),
  DOWN: Symbol("down"),
  LEFT: Symbol("left"),
  RIGHT: Symbol("right"),
});

const myDirection = Direction.UP;
if (myDirection === Direction.UP) {
  console.log("you are going up");
}
