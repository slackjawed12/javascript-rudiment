import fetch from "node-fetch";

// async : 제너레이터 실행기 역할
const async = (generatorFunc) => {
  const generator = generatorFunc(); // 2. 제너레이터 객체 생성
  // onResolved : 상위 스코프의 generator 변수를 기억하는 클로저
  const onResolved = (arg) => {
    // 5. onResolved에서 첫 번째 next 호출 : 인자 무시함 iterator done이 false이면 다음 스텝
    // 5-2. 두 번째 next 호출
    const result = generator.next(arg);

    // 7. result.done이 false이면 onResolved 재귀호출. 다음 next로 가게 됨
    return result.done
      ? result.value
      : result.value.then((res) => onResolved(res));
  };
  return onResolved; // 3. onResolved 함수 반환
};

async(function* fetchTodo() {
  // 1. async 호출 -> fetchTodo 호출
  const url = "https://jsonplaceholder.typicode.com/todos/1";

  // 6. value 프로퍼티인 첫 번째 yield된 fetch함수가 반환한 프로미스가 resolve한 Response 객체를 onResolved 함수에 인수로 전달
  // 6-2. 5-2에서 next의 호출 인수인 arg가 response에 들어감. 이는 6에서 Response 객체임
  const response = yield fetch(url);
  // 8. 두번째 next 이후 도달.
  const todo = yield response.json();
  console.log(todo);
})(); // 4. async의 반환 함수인 onResolved 즉시 호출
