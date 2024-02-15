let isPrime = (number: number) =>{
    let state = 0;
    let i: number;
    if (number <= 1){
        return `false`
    }
    for (i = 2; i <= number; i++){
        if (number % i == 0){
            state = state + 1
        }
    }
    if (state == 1){
        return `true`
    }else{
        return `false`
    }
  }
  console.log(isPrime(59))