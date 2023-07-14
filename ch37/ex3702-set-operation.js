// 직접 교집합, 합집합, 차집합 등 구현하기

// 교집합
Set.prototype.intersection = function (set) {
  const result = new Set();
  for (const value of set) {
    if (this.has(value)) {
      result.add(value);
    }
  }

  return result;
};

// 화살표 함수를 쓰면 this는 상위스코프의 this이므로 globalThis가 나온다.
// Set.prototype.intersectionV2 = (set) =>
//   new Set([...this].filter((v) => set.has(v)));

// 익명함수 쓰면 this는 호출객체이므로 Set<any>
Set.prototype.intersectionV2 = function (set) {
  return new Set([...this].filter((v) => set.has(v)));
};

const setA = new Set([1, 2, 3, 4, 5]);
const setB = new Set([1, 3, 5]);

console.log(setA.intersection(setB));
console.log(setB.intersection(setA));
console.log(setA.intersectionV2(setB));
console.log(setB.intersectionV2(setA));

// 합집합
Set.prototype.union = function (set) {
  const result = new Set(this);
  for (const value of set) {
    result.add(value);
  }

  return result;
};

Set.prototype.unionV2 = function (set) {
  return new Set([...this, ...set]);
};

const setC = new Set([1, 2, 3, 4, 5]);
const setD = new Set([1, 3, 5, 7, 9]);

console.log(setC.union(setD));
console.log(setD.union(setC));
console.log(setC.unionV2(setD));
console.log(setD.unionV2(setC));

// 차집합
Set.prototype.difference = function (set) {
  const result = new Set(this);

  for (const value of set) {
    result.delete(value);
  }

  return result;
};

Set.prototype.differenceV2 = function (set) {
  return new Set([...this].filter((v) => !set.has(v)));
};

const setE = new Set([1, 2, 3, 4]);
const setF = new Set([2, 4, 7]);

console.log(setE.difference(setF));
console.log(setF.difference(setE));
console.log(setE.differenceV2(setF));
console.log(setF.differenceV2(setE));

// 부분집합과 상위집합
Set.prototype.isSuperSet = function (subset) {
  for (const value of subset) {
    if (!this.has(value)) {
      return false;
    }
  }

  return true;
};

Set.prototype.isSuperSetV2 = function (subset) {
  return [...subset].every((v) => [...this].includes(v));
};

const setG = new Set([1, 2, 3, 4, 5]);
const setH = new Set([1, 3, 5]);

console.log(setG.isSuperSet(setH));
console.log(setH.isSuperSet(setG));
console.log(setG.isSuperSetV2(setH));
console.log(setH.isSuperSetV2(setG));
