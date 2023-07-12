// 무한 이터러블 생성 함수
const fibonacci = function () {
  let [pre, cur] = [0, 1];

  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      console.log("next is called :", pre, cur);
      [pre, cur] = [cur, pre + cur];
      // 무한 이터러블을 구현하려면 done 프로퍼티를 생략한다.
      return { value: cur };
    },
  };
};

// 필요 시점까지는 데이터가 생성되지 않다가, 필요시점이 되면 데이터를 생성?
// for ... of 는 데이터 소비자 - 이 loop에서 내부적으로 next를 호출하기 전에는 데이터가 생성되지 않는다.
for (const num of fibonacci()) {
  if (num > 10000) break;
  console.log(num);
}

// 마찬가지로 배열 디 스트럭처 할당 역시 데이터 소비자 - 개수만큼 next 호출!
const [f1, f2, f3] = fibonacci();
console.log(f1, f2, f3);
