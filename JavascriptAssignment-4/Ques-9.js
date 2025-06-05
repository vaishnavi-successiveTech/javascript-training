//9. Write a program to find the last duplicate index in an array
function lastDuplicate(arr){
    let arrSet=new Set();
    let ans = -1; // if there is no duplicates then it will return -1.

    for(let i=0;i<arr.length;i++){
        if(!arrSet.has(arr[i])){
            arrSet.add(arr[i]);
        }
        else{
            ans=i;
        }
    }
    return ans;
}
console.log(lastDuplicate([1,2,3,4,5,7])) // for -1
let arr=[3,2,1,4,2,5,6];
console.log(lastDuplicate(arr));