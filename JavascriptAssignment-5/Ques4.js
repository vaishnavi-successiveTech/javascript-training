// Write a program deepClone that takes an object as input and returns a deep copy of that object. The function should handle nested objects and arrays.
const obj={
    name:"Raj",
    age:23,
    cities:{
        north: "Delhi",
        south:"Kanyakumari",
        east:"Mehagyala",
        west:"Jaipur"
    },
    pin:43,
    streetNo:[2,3,4,1,5],
    func1: function fn(){
        return 3>5;
    }

};
// by doing manually.
const deepCopy=(obj,newObj) =>{
    for(let i in obj){
        newObj[i]=obj[i];
    }
    return newObj;
}
let newObj={};
const result=deepCopy(obj,newObj);
console.log(result);

// using parse and Json.stringify


let deepClone=JSON.parse(JSON.stringify(obj));
deepClone.name="Tom";
console.log(obj);
console.log(deepClone); // using parse and stringify it does not clone the function
