const person = {};

Object.defineProperties(person, {
    firstName: {
        value: 'Gildong',
        writable: true,
        enumerable: true,
        configurable: true
    },
    lastName:{
        value: 'Hong',
        writable: true,
        enumerable: true,
        configurable: true
    },
    fullName:{
        get(){
            return `${this.firstName} ${this.lastName}`;
        },
        set(name){
            [this.firstName, this.lastName] = name.split(' ');
        },
        enumerable: true,
        configurable: true
    }
});

person.fullName = 'Baekho Gang';
console.log(person);