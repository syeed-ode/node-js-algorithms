// in the workings of the Node.js module system
//       the trick is all in
//                  1) the wrapper we create around a module's source code
//                  2) the artificial environment in which we run it. .


/**
 'CommonJS' is a group to standardize the JavaScript ecosystem with CommonJS modules
      Node.js built its module system on top of this specification.
              we can make an analogy with the revealing module pattern

               each module runs in a private scope

               every variable that is defined locally does not pollute the global namespace.
*/

// this code builds a similar system from scratch
//      it creates a function that mimics the original 'require()'
//      function of Node.js..

// the 'loadModule()' function
//      loads the content of a module
//
//      wraps it into a private scope, and
//
//      evaluates it
function loadModule(filename, moduleName, required) {
    // The source code of a module is essentially wrapped into a function
    //      as it was for the revealing module pattern
    // The difference here is that we pass a list of variables to the
    //      module, in particular, 'moduleName', 'exports', and 'require'. .
    const wrappedSrc=`(function(moduleName, exports, require) {
        ${fs.readFileSync(filename, 'utf8')}
    })(moduleName, moduleName.exports, required);`;

    // Features such as 'eval()' or the functions of the 'vm' module can be
    // easily used in the wrong way or with the wrong input, thus opening a system
    // to code injection attacks.
    eval(wrappedSrc);
}

// Let's now see what these variables contain by implementing our 'required()' function
//      this function simulates the behavior of the original require() function of
//              Node.js. I helps to highlight  the internals of the Node.js module
//              system, how a module is defined, and loaded.
const required = (moduleName) => {
    console.log(`Require invoke for module: ${moduleName}`);

    // the very first thing that we do is resolve the full path of the module, which
    // we call 'id'.
    const id = required.resolve(moduleName);

    // If the module has already been loaded in the past, it should be available in
    // the cache. In this case, we just return it immediately
    if(required.cache[id]) {
        return required.cache[id].exports;
    }

    // module metadata
    // If the module was not loaded yet, we set up the environment for the first load
    //      we create a 'moduleVariable' object that contains an 'exports' property
    //      initialized with an empty object literal.
    const moduleVariable = {
        // This property will be used by the code of the module to export any public API..
        exports: {},
        id: id
    };

    // Update the cache
    // The 'moduleVariable' object is cached.
    require.cache[id] = moduleVariable;

    // load the module
    // The module source code is read from its file and the code is evaluated with the eval function
    //      from above. The module exports its public API by manipulating or replacing the
    //      'module.exports' object.
    loadModule(id, moduleVariable, required);

    // return exported variables
    // the content of module.exports, which represents the public API of the module, is returned to
    // the caller.
    return moduleVariable.exports;              // [6]
};

required.cache = {};

required.resolve = (moduleName) => {
    /* resolve a full module id from the moduleName */
};

