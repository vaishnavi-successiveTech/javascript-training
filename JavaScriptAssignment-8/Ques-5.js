const myArray = [1, 2, 3, 4];
for (let i = 0; i < myArray.length; i++) {
   console.log(myArray[i]);
}

let myNumber = myArray[3]; // the number which is passing in the index should be less than the size of an array (length-1).
if (myNumber) {
   console.log('The number is: ',myNumber);
} else {
   console.log('The number is undefined');
}