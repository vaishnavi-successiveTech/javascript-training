//Give an example of using multiple callback functions in a single function in JavaScript

const fnCallback= (callback1,callback2,callback3)=>{
    setTimeout(()=>{
        console.log("this function is 1st Function");
        callback1(callback2,callback3);
    },1500);
}
const fnCallback1=(callback1,callback2)=>{
    setTimeout(()=>{
        console.log("this is function is 2nd");
        callback1(callback2);
    },1400);
}
const fnCallback2=(callback1)=>{
    setTimeout(()=>{
        console.log("this function is 3rd");
        callback1();
    },2000);
}

const fnCallback3=()=>{
    setTimeout(()=>{
        console.log("this function is 4 th");
    },4000)
}

fnCallback(fnCallback1,fnCallback2,fnCallback3);


