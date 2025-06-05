// Write a program to perform functionality of a calculator (add,sub,multiply,divide)
const operator="+";
const num1=5;
const num2=10;
let result;

switch(operator){
    case '+': result=num1+num2;
              break;
    case '-': result=num2-num1;
              break;      
    case '*': result=num1*num2;
              break;
    case '/': result=num2/num1;
              break;
              
    default: { console.log("You entered the wrong operator");
               break;
             }
             
}

console.log(result);
