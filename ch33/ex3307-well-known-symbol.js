const iterable = {
  [Symbol.iterator]() {
    let cur = 1;
    const max = 5;
    return {
      // 반환값 : next 메서드를 갖는 이터레이터
      next() {
        return {
          value: cur++,
          done: cur > max + 1,
        };
      },
    };
  },
};

for (const num of iterable) {
  console.log(num);
}
