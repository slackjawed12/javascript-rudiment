// for ... in
// 객체의 모든 프로퍼티를 순회하며 열거
const person = {
    name: 'Lee',
    address: 'Seoul'
};

for (const key in person) {
    console.log(key + ': ' + person[key]);
}