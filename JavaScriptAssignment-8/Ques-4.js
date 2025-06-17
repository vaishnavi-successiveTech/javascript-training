const myString = 'hello world';
if (myString.length > 0) {
    console.log('The length of the string is: ' + myString.length);
} else {
    console.log('The string is empty');
}

let myNumber = parseInt(myString); // becuase string does not contain number
if (myNumber) {
   console.log('The number is: ' + myNumber);
} else {
   console.log('The value is not a number');
}
// No error 