// The presence of a callback argument might make
// us think that a function is asynchronous or is
// using a continuation-passing style; that's not
// always true. Let's take, for example, the map()
// method of an Array object:
const result = [1, 5, 7].map(element => element - 1);
console.log(result); // [0, 4, 6]
// The callback is used just to iterate over the
// elements of the array, and not to pass the of the
// operation. In fact, the result is returned
// synchronously using a direct style.