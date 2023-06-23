// 비동기 처리를 순차적으로 처리하는 예시
// 앞선 비동기 처리 결과를 다음 비동기 처리가 사용하지 않으므로, 순차처리가 필요없음
const requestData1 = () =>
  new Promise((resolve) => setTimeout(() => resolve(1), 3000));
const requestData2 = () =>
  new Promise((resolve) => setTimeout(() => resolve(2), 2000));
const requestData3 = () =>
  new Promise((resolve) => setTimeout(() => resolve(3), 1000));

const res = [];
requestData1()
  .then((data) => {
    res.push(data);
    return requestData2();
  })
  .then((data) => {
    res.push(data);
    return requestData3();
  })
  .then((data) => {
    res.push(data);
    console.log(res); // 실행 후 약 6초 소요
  })
  .catch(console.error);
