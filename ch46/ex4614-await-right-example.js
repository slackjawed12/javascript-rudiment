// await으로 순차처리 해야하는 사례 : 앞선 처리의 결과로 다음 처리를 수행해야 하는 경우
async function bar() {
  const a = await new Promise((resolve) => setTimeout(() => resolve(1), 3000));
  const b = await new Promise((resolve) =>
    setTimeout(() => resolve(a + 1), 2000)
  );
  const c = await new Promise((resolve) =>
    setTimeout(() => resolve(b + 10), 1000)
  );
  console.log([a, b, c]);
}

bar(1);
