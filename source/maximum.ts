let maximumValue=(arr: number[]): number =>{
    let number = 0;
    let r=arr.length;
    for(let i=0; i<r; i++){
            if(number<arr[i]){
                number = arr[i]
            }
    }
    return number;
}
console.log(maximumValue([7,3,5,278,20,16,57]));