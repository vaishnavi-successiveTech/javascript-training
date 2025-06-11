// Write a program to convert given string to upperCase OR lowerCase


const changeToUpperAscii =(str) =>{
  let res="";
  for(let i=0;i<str.length;i++){
    let ascii=str.charCodeAt(i); // get the code for str[i]
    if(ascii>=97 && ascii<=122){
      ascii=ascii-32; // converting lower to upper.
   }
    res+=String.fromCharCode(ascii);

  }
  return res;
}
const changeToLowerAscii =(str) =>{
  let res="";
  for(let i=0;i<str.length;i++){
    let ascii=str.charCodeAt(i); // get the code for str[i]
    if(ascii>=65 && ascii<=90){
      ascii=ascii+32; // converting lower to upper.
   }
    res+=String.fromCharCode(ascii);

  }
  return res;
}
const str = "Hello";
console.log(changeToUpperAscii(str));

const str1 = "joY";
console.log(changeToLowerAscii(str1));


// using built in function

const changeToUpper = (str)=>{
  let result = str.toUpperCase();
  return result;
}
const changeToLower= (str)=> {
  let res = str.toLowerCase();
  return res;
}


console.log(changeToUpper(str));

console.log(changeToLower(str1));
