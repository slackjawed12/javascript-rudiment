const lee = { name: "lee" };
const kim = { name: "kim" };
const choi = { name: "choi" };

const map = new Map([
  [lee, "backend"],
  [kim, "frontend"],
  [choi, "designer"],
]);

// forEach 메서드 사용 가능
// 1 - 요소 값
// 2 - 요소 키
// 3 - 맵 객체
map.forEach((v, k, map) => {
  console.log(v, k, map);
});

// Map 객체는 iterable
console.log(Symbol.iterator in map);

for (const entry of map) {
  console.log(entry);
}

console.log([...map]);

// 배열 디스트럭처링 할당
const [a, b] = map;
console.log(a, b);

const [c, ...d] = map;
console.log(c, d);

// keys, values, entries : 이터러블이면서 이터레이터인 객체를 반환
// for of로 순회 가능
for (const key of map.keys()) {
  console.log(key);
}

for (const value of map.values()) {
  console.log(value);
}

for (const entry of map.entries()) {
  console.log(entry);
}
