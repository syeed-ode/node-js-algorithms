// Class syntax
function Person(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
}
//  We are providing our prototype
// with a helper function that allows
// us to easily get the full name of a
// 'person' object
Person.prototype.getFullName = function() {
    return this.name + ' ' + this.surname;
};
// generic helper function accessible directly
// from the Person prototype that returns
// the older person between two Person
// instances given as input.
Person.older = function(person1, person2) {
    return (person1.age >= person2.age) ? person1 : person2;
};

const olderPerson = new Person("Syeed", "Ode", 43);
// older is accessed statically
console.log(Person.older(new Person("Andinet", "Habtamu", 27), olderPerson));

// Let's see now how we can implement the same example using the new handy ES2015 class syntax
// This syntax is more readable and straightforward to understand.
class Person2 {
    // We are explicitly stating
    // what the constructor is for the class
    constructor (name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    getFullName () {
        return this.name + ' ' + this.surname;
    }

    // We are declaring the function older as a static
    // method.
    static older (person1, person2) {
        return (person1.age >= person2.age) ? person1 : person2;
    }
}

// But the real killer feature of the
// new syntax is the possibility of
// extending the Person prototype
// using the extend and super keywords.
class PersonWithMiddlename extends Person2 {
    constructor (name, middlename, surname, age) {
        // we define a new constructor
        // that can call the parent
        // one using the keyword 'super'
        super(name, surname, age);
        this.middlename = middlename;
    }
    getFullName () {
        return this.name + '' + this.middlename + '' + this.surname;
    }
}
