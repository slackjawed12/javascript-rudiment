// for ... of : 이터러블 순회하면서 요소를 변수에 할당
for (const item of [1, 2, 3]) {
  console.log(item);
}

// for ... of 의 내부 동작
const iterator = iterable[Symbol.iterator]();

for (;;) {
  const res = iterator.next();
  if (res.done) break;

  const item = res.value;
  console.log(item);
}
