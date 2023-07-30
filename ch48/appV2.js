// lib 모듈이 export한 모든 식별자를 lib 객체의 프로퍼티로 모아서 import
import * as lib from "./lib.mjs";
// 식별자 이름 변경
import { pi as PI, square as sq, Person as P } from "./lib.mjs";
import defaultSquare from "./lib.mjs";
console.log(lib.pi);
console.log(lib.square(10));
console.log(new lib.Person("lee"));

console.log(PI);
console.log(sq(2));
console.log(new P("kim"));
console.log(defaultSquare(5));
