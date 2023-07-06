const numbers = [1, 4, 9];
const roots = numbers.map((item) => Math.sqrt(item));
console.log(numbers);
console.log(roots);

// 콜백함수에 배열 요소값, 인덱스, this 전달
[1, 2, 3].map((item, index, arr) => {
  console.log(`item:${item}, index:${index}, this: ${JSON.stringify(arr)}`);
  return item;
});

// 콜백함수 두번째 인수로 thisArg 전달
class Prefixer {
  constructor(prefix) {
    this.prefix = prefix;
  }

  // 두번째인수 this : 콜백함수 내부에서 사용할 this 객체. 생성될 인스턴스임
  add(arr) {
    return arr.map(function (item) {
      return this.prefix + item;
    }, this);
  }

  // 편한 방법 : 화살표함수
  addV2(arr) {
    return arr.map((item) => this.prefix + item);
  }
}

const prefixer = new Prefixer("-webkit-");
console.log(prefixer.add(["transition", "user-select"]));

const prefixerV2 = new Prefixer("-webkitV2-");
console.log(prefixerV2.addV2(["transition", "user-select"]));
