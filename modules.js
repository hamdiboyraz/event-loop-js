// console.log(arguments);
// console.log(require("module").wrapper);

// module.exports
const C = require("./test-module-1");
const calc1 = new C();
console.log(calc1.add(1, 5));

// exports
const calc2 = require("./test-module-2");
console.log(calc2.add(2, 5));
console.log(calc2.multiply(2, 5));

// Object destructuring
const { add, multiply, divide } = require("./test-module-2");
console.log(add(3, 5));
console.log(multiply(3, 5));

// Caching
// The code in the module just executed once. -> hello ...
// But the functions in the module comes from cache -> log this ..
require("./test-module-3")();
require("./test-module-3")();
require("./test-module-3")();
