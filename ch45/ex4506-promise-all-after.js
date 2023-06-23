// 비동기 처리를 병렬 처리 하는 예시 : Promise.all
const requestData4 = () =>
  new Promise((resolve) => setTimeout(() => resolve(1), 3000));
const requestData5 = () =>
  new Promise((resolve) => setTimeout(() => resolve(2), 2000));
const requestData6 = () =>
  new Promise((resolve) => setTimeout(() => resolve(3), 1000));

Promise.all([requestData4(), requestData5(), requestData6()])
  .then(console.log)
  .catch(console.error);
// 첫 번째 프로미스는 3초 후 1을 resolve
// 두 번째 프로미스는 2초 후 2을 resolve
// 세 번째 프로미스는 1초 후 3을 resolve
// 모두 fulfilled 상태되면 종료