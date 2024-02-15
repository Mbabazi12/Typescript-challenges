let factorial = (input: number) => {
    let number = 1;
     for (let i = input; i >= 1; i--){
       number = number * i
        }
   return number;
    }
  console.log(factorial(10));