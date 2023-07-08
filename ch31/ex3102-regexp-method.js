const target = "Is this all there is?";
const regExp = /is/g;

console.log(regExp.exec(target));
console.log(regExp.test(target));
console.log(target.match(regExp));
// flag
console.log(target.match(/is/));
console.log(target.match(/is/i));
console.log(target.match(/is/g));
console.log(target.match(/is/gi));
