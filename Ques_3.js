//Write a function expression that takes in another function as an argument

const add = function (num,num2){
    return num+num2;
}
// function call as an argument
const subtract = function (add,num5)
{
    return result=num5-add(3,4);
}

console.log(subtract(add,10));