// 2.Write a program to reverse a string ("Hello John" => "olleH nhoJ")

function reverseString(str){
    let ans='';
    let strArray=str.split(' '); // ["Hello","World"]
    for(let i=0;i<strArray.length;i++){
        ans+=revString(strArray[i])+' ';
    }
    return ans;

    function revString(ele)
    { 
    let stack=[];
    for(let i=0;i<ele.length;i++){
        stack.push(ele[i]);
    }
    let newStr=[];
    for(let j=stack.length -1;j>=0;j--){
        newStr.push(stack[j]);    
    }
     return newStr.join(''); // here the output join back and return

    }

}
console.log(reverseString("Hello John"));

