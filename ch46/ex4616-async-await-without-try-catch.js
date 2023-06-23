import fetch from "node-fetch";

const foo = async () => {
  const wrongUrl = "https://wrong.url";
  const response = await fetch(wrongUrl);
  const data = await response.json();
  return data;
};

// catch로 에러처리 하지 않으면 async 함수는 발생 에러를 reject하는 프로미스를 반환
// async 호출 이후 Promise.prototype.catch 후속 처리 메서드 사용해서 캐치
foo().then(console.log).catch(console.error);
