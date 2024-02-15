"use strict";
function shareKeyValue(obj1, obj2) {
    for (let key in obj1) {
        if (obj2.hasOwnProperty(key) && obj2[key] === obj1[key]) {
            return true;
        }
    }
    return false;
}
let obj1 = { name: 'diane', age: 20 };
let obj2 = { name: 'diane', age: 19 };
console.log(shareKeyValue(obj1, obj2));
let obj3 = { name: 'diane', age: 20, city: 'Remera' };
let obj4 = { name: 'richard', age: 24, city: 'Kigali' };
console.log(shareKeyValue(obj3, obj4));
//# sourceMappingURL=determine.js.map