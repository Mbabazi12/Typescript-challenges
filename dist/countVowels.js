"use strict";
let countVowels = (vowels) => {
    let count = 0;
    let r = vowels.length;
    for (let i = 0; i < r; i++) {
        if ("aeiou".includes(vowels[i]) || "AEIOU".includes(vowels[i])) {
            count = count + 1;
        }
    }
    return count;
};
console.log(countVowels("Mbabazi Diane"));
//# sourceMappingURL=countVowels.js.map