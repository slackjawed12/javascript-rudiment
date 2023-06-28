const funcs = [];
// let, const 반복문은 loop마다 새로운 렉시컬 환경을 생성한다.
for (let i = 0; i < 3; i++) {
  let x = i;
  funcs[i] = function () {
    return x + i;
  };
}

for (let i = 0; i < funcs.length; i++) {
  console.log(funcs[i]());
}
