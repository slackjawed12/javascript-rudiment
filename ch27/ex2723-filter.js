const numbers = [1, 2, 3, 4, 5];

console.log(numbers.filter((item) => item % 2));

// 인수 세 개
[1, 2, 3, 4, 5, 6].filter((item, index, arr) => {
  console.log(`item:${item}, index:${index}, this:${JSON.stringify(arr)}`);
  return item % 2;
});

// 인수 두 개 : item, thisArg
class Users {
  constructor() {
    this.users = [
      { id: 1, name: "lee" },
      { id: 2, name: "kim" },
    ];
  }

  findById(id) {
    return this.users.filter((user) => user.id === id);
  }

  // 특정 요소 제거에 활용 가능 : 중복요소 모두 제거함
  remove(id) {
    this.users = this.users.filter((user) => user.id !== id);
  }
}

const users = new Users();

let user = users.findById(1);
console.log(user);

users.remove(1);
user = users.findById(1);
console.log(user);

// 중복 요소 제거
const values = [1, 2, 1, 3, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 1, 1, 2, 3];
const result = values.filter((val, i, _values) => _values.indexOf(val) === i);
console.log(result);

// 중복 요소 제거 : set 활용
const resultV2 = [...new Set(values)];
console.log(resultV2);
