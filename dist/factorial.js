"use strict";
let factorial = (input) => {
    let number = 1;
    for (let i = input; i >= 1; i--) {
        number = number * i;
    }
    return number;
};
console.log(factorial(10));
//# sourceMappingURL=factorial.js.map