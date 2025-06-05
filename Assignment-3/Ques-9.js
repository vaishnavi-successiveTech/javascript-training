// Write a program to print fibonaaci series
 // 0 1 1 2 3 5 8
let first=0;
let second=1;
const length=10;
let third;
console.log(first);
console.log(second);
for(let i=1;i<length;i++){
     third=second+first; //  
     first=second;
     second=third;
     console.log(third);
}

// using Recursion 

function fibonaaci(num){
    if(num<=1)
        return num;
    
    return fibonaaci(num-1)+fibonaaci(num-2);

}
const num=10;
for(let i=0;i<num;i++){
console.log(fibonaaci(i))
};
