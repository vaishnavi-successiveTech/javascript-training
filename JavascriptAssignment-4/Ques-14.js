//14. Write a program to reverse an array

function reverseArray(arr){
    let revArray=[];
    let len=arr.length;
    for(let i=len-1;i>0;i--){
        revArray.push(arr[i]);
    }
    return revArray;
}
let arr=[2,4,5,6,7,8];
console.log(reverseArray(arr));
