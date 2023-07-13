// ES6 이전
const user = { firstName: "gildong", lastName: "hong" };
const firstName = user.firstName;
const lastName = user.lastName;

console.log(firstName, lastName);

// ES6 이후
const userV2 = { firstNameV2: "gildong", lastNameV2: "hong" };
// 객체 디스트럭처링 할당 : 프로퍼티 키를 기준으로 할당을 한다. 순서 상관없음
const { lastNameV2, firstNameV2 } = userV2;
console.log(lastNameV2, firstNameV2);

// 프로퍼티값 할당받을 변수를 객체 리터럴 형태로 선언
const { lastNameV3, firstNameV3 } = { firstNameV3: "foo", lastNameV3: "bar" };
console.log(firstNameV3, lastNameV3);

// 할당하지 않거나 객체표현식이 아니면 에러
// const {a,b};
// const {c,d}=null;

const obj = {
  a: 1,
  b: 2,
};

// 프로퍼티 축약표현
// const { a: a, b: b } = obj; 과 같다.
// const { a, b } = obj;

// 기본값 할당 - 기본값보다 할당값 우선, 할당되지 않으면 undefined
const { a = 3, b } = { a: 7 };
console.log(a, b);
const { e = 3, f } = { f: 5 };
console.log(e, f);

// 객체 프로퍼티 키와 다른 변수이름으로 할당 : 변수 선언
// 프로퍼티 키가 a, b인 프로퍼티 값을 각각 c, d에 할당
const { a: c, b: d } = obj;
console.log(c, d);

// 변수에 기본값 설정 + 프로퍼티 키와 다른 변수이름 할당
const { a: otherA = 15, b: otherB } = { b: 22 };
console.log(otherA, otherB);

// 활용 : 프로퍼티 키-값 추출
const str = "hello";
const { length } = str;
console.log(length);

const todo = { id: 1, content: "HTML", completed: true };
const { id, content } = todo;
console.log(id, content);

// 객체를 인수로 전달받는 함수
function printTodo(todo) {
  console.log(
    `할일 ${todo.content}은 ${todo.completed ? "완료" : "비완료"} 상태입니다.`
  );
}

printTodo({ id: 1, content: "JavaScript", completed: true });

// 함수 매개변수에 객체 디스트럭처링 할당
function printTodoV2({ content, completed }) {
  console.log(`할일 ${content}은 ${completed ? "완료" : "비완료"} 상태입니다.`);
}

printTodoV2({ id: 1, content: "html", completed: false });

// 객체배열 - 배열 디스트럭처링 + 객체 디스트럭처링 혼용
const todos = [
  { id: 1, content: "html", completed: true },
  { id: 2, content: "TypeScript", completed: false },
  { id: 3, content: "css", completed: true },
];

const [{ id: i1 }, { id: i2 }, { id: i3 }] = todos;
console.log(i1, i2, i3);

// 중첩객체
const userInfo = {
  name: "lee",
  address: {
    zipCode: "12345",
    city: "seoul",
  },
};

// 작동순서 : address 프로퍼티 키로 객체 추출 -> 객체의 city 프로퍼티 키로 값 추출
const {
  address: { city },
} = userInfo;
console.log(city);

// rest 프로퍼티 : 마지막에 와야함
const { foo, ...rest } = { foo: 1, bar: 2, baz: 3 };
console.log(foo, rest);
