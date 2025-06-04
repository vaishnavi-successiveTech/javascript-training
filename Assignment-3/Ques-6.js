// Write a program to display prime numbers from 1 to 50
function primeNumber(num){
    for(let i=2;i<=50;i++){
        let isPrime=true;
        for(let j=2;j<Math.sqrt(i);j++)
        {
           if(i%j==0){
            isPrime=false;
           }
        }
        if(isPrime)
        {
            console.log(i);
        }
    }
}
primeNumber();


