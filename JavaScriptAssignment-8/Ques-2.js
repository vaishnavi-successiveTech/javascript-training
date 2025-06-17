// 
let myObject = { name: 'John', age: 30 };
for (let property in myObject) { // use let here
   console.log(property + ': ' + myObject[property]);  // call the object value properly
}