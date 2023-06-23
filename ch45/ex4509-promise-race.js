// 가장 먼저 fulfilled 상태의 결과를 resolve
Promise.race([
  new Promise((resolve) => setTimeout(() => resolve(1), 3000)),
  new Promise((resolve) => setTimeout(() => resolve(2), 2000)),
  new Promise((resolve) => setTimeout(() => resolve(3), 1000)),
])
  .then(console.log) // 3 출력
  .catch(console.log);

// reject는 all과 동일하게 하나라도 rejected이면 프로미스 반환
Promise.race([
  new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Error 1")), 6000)
  ),
  new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Error 2")), 5000)
  ),
  new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Error 3")), 4000)
  ),
])
  .then(console.log)
  .catch(console.log);
