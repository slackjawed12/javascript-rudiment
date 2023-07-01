class MyArray extends Array {
  // 중복된 배열요소 제거하고 반환
  uniq() {
    // MyArray 인스턴스를 반환한다.
    return this.filter((v, i, self) => self.indexOf(v) === i);
  }

  average() {
    return this.reduce((pre, cur) => pre + cur, 0) / this.length;
  }
}

const myArray = new MyArray(1, 1, 2, 3);
console.log(myArray);

console.log(myArray.uniq());
console.log(myArray.average());
// 메서드 체이닝
console.log(myArray.uniq().average());

class MyArrayV2 extends Array {
  static get [Symbol.species]() {
    return Array;
  }

  uniq() {
    return this.filter((v, i, self) => self.indexOf(v) === i);
  }

  average() {
    return this.reduce((pre, cur) => pre + cur, 0) / this.length;
  }
}
