let lastnum=0;

function randomNum()
{
   let num=Math.floor(Math.random() * 10)+1
   while(num==lastnum)
   {
      // assign a random number to num again .
      num=Math.floor(Math.random() * 10)+1;
   }
   lastnum=num;
   return num;
}
console.log(randomNum());
console.log(randomNum());



