// Write a program to give a random output between 1 to 10 (AC: 2 simultaneous answers could not be same)

//initialize the lastnum as 0.
let lastnum=0;

function randomNum()
{
   let num=Math.floor(Math.random() * 10)+1
   while(num==lastnum)
   {
      // assign a random number to num again .
      num=Math.floor(Math.random() * 10)+1;
   }
   // here assign the value of lastnum.
   lastnum=num;
   return num;
}
console.log(randomNum()); 
console.log(randomNum());



