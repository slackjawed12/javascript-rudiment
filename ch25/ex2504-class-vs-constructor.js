function PersonV1(name) {
  this.name = name;
}

class PersonV2 {
  constructor(name) {
    this.name = name;
  }
}

console.dir(PersonV1);
console.dir(PersonV2);
