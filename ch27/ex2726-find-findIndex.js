const users = [
  { id: 1, name: "lee" },
  { id: 2, name: "kim" },
  { id: 2, name: "cho" },
  { id: 3, name: "choi" },
  { id: 4, name: "park" },
];

// 첫 번째 요소만 반환
console.log(users.find((user) => user.id === 2));

// findIndex : 첫 번째 요소의 인덱스
console.log(users.findIndex((user) => user.id === 2)); // 1
