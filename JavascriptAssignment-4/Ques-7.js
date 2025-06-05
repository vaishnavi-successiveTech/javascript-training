// 7. Write a program to find index of duplicate elements in an array
const arr=[8,9,8,2,3,1,2,1,9,5];


function indexOfDuplicates(arr){
     let resArr=[];
     for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]==arr[j]){
                  resArr.push(j);
            }
        }
     }
     return resArr;
}

console.log(indexOfDuplicates(arr));