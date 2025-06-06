//Write a function expression that takes in another function as an argument

const add = function(num,num2){
    return num+num2;
}
// function call as an argument
const subtract = function(add,num5)
{
    result = num5 - add(3, 4);
    return result;
}

console.log(subtract(add,10));