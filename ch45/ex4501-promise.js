const promise = new Promise((resolve, reject) => {
  if (true) {
    // 비동기 처리 성공
    resolve("result");
  } else {
    // 비동기 처리 실패
    reject("failure reason");
  }
});
// Promise 생성자 함수가 인수로 전달받은 콜백 함수 내부에서 비동기 처리 수행
// 비동기 처리 성공 : 콜백 함수의 인수로 받은 resolve 함수 호출
// 비동기 처리 실패 : 콜백 함수의 인수로 받은 reject 함수 호출
