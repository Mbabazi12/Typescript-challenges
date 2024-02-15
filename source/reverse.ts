let reverseArray = (arr: number[]) => {
    let reverse = [];
    let r = arr.length;
    for (let i = r-1; i >= 0; i--){
          reverse.push(arr[i]);
    }
    return reverse;
}
console.log(reverseArray([1,2,3,4,5,6,7,8,9,10]))