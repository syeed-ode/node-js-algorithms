const x = {};
x.name = 'x';

console.log(x);


const numbers = [2, 6, 7, 8, 1];
const firstEven = numbers.filter(function(x) {
    return x%2 === 0;
});
console.log("firstEven: " + firstEven);

const secondEven = numbers.filter(x => x%2 === 0);
console.log("secondEven: " + secondEven);

const thirdEven = numbers.filter(x => {
    if (x%2 === 0) {
        console.log(x + ' is even!');
        return true;
    }
});

console.log("thirdEven: " + thirdEven);


function DelayedGreeter(name) {
    this.name = name;
}
DelayedGreeter.prototype.greet = function() {
    setTimeout( function cb() {
        console.log('Hello ' + this.name);
    }, 500);
};
const greeter = new DelayedGreeter('World');
greeter.greet(); // will print "Hello undefined"


DelayedGreeter.prototype.greet = function() {
    console.log("I should be inside greet scope: " + this.name);
    setTimeout( function cb() {
        console.log('Inside greeter2 setTime function says: Hello ' + "this.name");
    }, 500);
};
const greeter2 = new DelayedGreeter('Greeter2');
greeter2.greet(); // will print "Hello undefined"

DelayedGreeter.prototype.greet = function() {
    setTimeout( (function cb() {
        console.log('Hello ' + this.name);
        // This part binds greeter object
        // to the cb callback function
    }).bind(this), 500);
};
const greeter3 = new DelayedGreeter('Greeter3');
greeter3.greet(); // will print "Hello undefined"


DelayedGreeter.prototype.greet = function() {
    setTimeout( () => console.log('Hello' + this.name), 500);
};
const greeterArrowFunction = new DelayedGreeter('. Arrow functions are bound to their lexical scope');
greeterArrowFunction.greet(); // will print "Hello undefined"


















