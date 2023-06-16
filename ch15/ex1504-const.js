const foo = 1;
// const foo; // syntaxerror

{
    // console.log(foo2);
    const foo2 = 2;
    console.log(foo2);
}

// 블록 레벨 스코프
// console.log(foo2);

// 재할당 금지
const foo3 = 1;
// foo3 = 2; TypeError

// 상수 사용하기
const TAX_RATE = 0.1;

let preTaxPrice = 100;
let afterTaxPrice = preTaxPrice + (preTaxPrice * TAX_RATE);

console.log(afterTaxPrice);

// 객체 - 값 변경됨
const person = {
    name: 'lee'
};

person.name = 'kim';

console.log(person);


