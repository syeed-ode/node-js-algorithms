// Enhanced object literals

// ES2015 introduced an enhanced object literals syntax.
// This syntax offers a shorthand to assign variables
//      and functions as members of the object,
// allows us to define computed member names at
//      creation time, and
// also handy setter and getter methods.
const z = 22;
const y = 17;
const obj = { z, y };

console.log(obj);


//  Notice that we don't need to specify the keyword
// function.
revealingModulePattern.exports = {
    square (x) {
        return x * x;
    },
    cube (x) {
        return x * x * x;
    }
};

console.log(revealingModulePattern.exports.cube(27))

const namespace = '-webkit-';
const style = {
    [namespace + 'box-sizing'] : 'border-box',
    [namespace + 'box-shadow'] : '10px10px5px #888888'
};

console.log(style);

const person = {
    name : 'George',
    surname : 'Boole',
    get fullname () {
        return this.name + ' ' + this.surname;
    },
    set fullname (fullname) {
        let parts = fullname.split(' ');
        this.name = parts[0];
        this.surname = parts[1];
    }
};

console.log(person.fullname); // "George Boole"
console.log(person.fullname = 'Alan Turing'); // "Alan Turing"
console.log(person.name); // "Alan"
console.log(person.surname); // "Alan"
