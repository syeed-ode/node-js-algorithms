// One of the major problems with JavaScript is the absence of namespacing.
//      Programs that run in the global scope polluting it with data that comes from
//      both internal application code and dependencies.
//
//      the revealing revealingModulePattern pattern
//              is a popular technique to solve this problem.
//
// the ideal behind this pattern is used as a base for the Node.js module system.

const revealingModulePattern = ( () => {
// the 'revealingModulePattern' variable contains only the exported API

    // the rest of this content is inaccessible from the outside
    const privateFoo = () => {};
    const privateBar = [];

    // leverages a self invoking function
    // exporting only the parts that are meant to be public.
    const exported = {
        publicFoo: () => {},
        publicBar: () => {}
    };

    return exported;
})();

console.log(revealingModulePattern);

