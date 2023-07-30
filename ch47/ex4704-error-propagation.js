// 에러는 caller 방향으로 전파된다.
const foo = () => {
  throw Error("this is from foo function");
};

const bar = () => {
  foo();
};

const baz = () => {
  bar();
};

try {
  baz();
} catch (err) {
  console.error(err);
}
