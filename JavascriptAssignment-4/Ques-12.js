//12. Write a program to display intersection of two array

function intersection(arr1,arr2){
    let ans=[];
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
            if(arr1[i]==arr2[j]){
                ans.push(arr1[i]);
            }
        }
    }
    return ans;
}
let arr1=[8,4,2,1,4];
let arr2=[3,2,1,4,2];
console.log(intersection(arr1,arr2));