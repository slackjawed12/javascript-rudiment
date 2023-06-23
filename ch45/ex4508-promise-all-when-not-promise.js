// 이터러블 요소가 프로미스가 아니면 resolve메서드를 통해 프로미스로 래핑
Promise.all([1, 2, 3]).then(console.log).catch(console.log);
