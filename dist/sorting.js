"use strict";
let mergeSortedArrays = (arr1, arr2) => {
    let mergedArray = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        }
        else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }
    for (; i < arr1.length; i++) {
        mergedArray.push(arr1[i]);
    }
    for (; j < arr2.length; j++) {
        mergedArray.push(arr2[j]);
    }
    return mergedArray;
};
let arr1 = [1, 3, 5, 7];
let arr2 = [2, 4, 6, 8];
let merged = mergeSortedArrays(arr1, arr2);
console.log(merged);
//# sourceMappingURL=sorting.js.map