const removeDuplicate = (arr: number[]): number[] => {
    let newArray: number[] = [];
    let q: number = arr.length;
    for (let i: number = 0; i < q; i++) {
        if (!newArray.includes(arr[i])) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

console.log(removeDuplicate([12, 2, 43, 12, 4, 54, 87, 43]));