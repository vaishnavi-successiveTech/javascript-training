// Write a program deepClone that takes an object as input and returns a deep copy of that object. The function should handle nested objects and arrays.
const obj={
    name:"Raj",
    age:23,
    cities:{
        north: "Delhi",
        south:"Kanyakumari",
        east:"Mehagyala",
        west:{capital:"Jaipur"},
    },
    pin:43,
    streetNo:[2,3,4,1,5],
    myDate:new Date(),
};

const deepCopy=structuredClone(obj);
deepCopy.cities.west.capital="Udaipur";

console.log(obj);
console.log(deepCopy);

// using parse and Json.stringify


const deepClone=JSON.parse(JSON.stringify(obj));
deepClone.name="Tom";

console.log(obj);
console.log(deepClone); // using parse and stringify


const obj1={
    name:"Raj",
    age:23,
    cities:{
        north: "Delhi",
        south:"Kanyakumari",
        east:"Mehagyala",
        west:{capital:"Jaipur"},
        famousCities:["Delhi","Chennai","Agra"]
    },
    pin:43,
    streetNo:[2,3,4,1,5],
    myDate:new Date(),
};

// DeepCopyObject using recursion

const deepCopyObject=(obj)=>{
    var newObj;
    if(Array.isArray){
        newObj=[];
    }
    else{
        newObj={};
    }
    for(const i of obj){
        if(typeof(obj)==="object"){
            newObj[i]=deepCopyObject(obj[i]); // key's value
            
        }
        else {
            newObj[i]=obj[i];
        }
    }
    return newObj;
}

obj1.cities.famousCities.push("Goa");
console.log(obj1);


