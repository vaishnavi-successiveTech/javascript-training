// 7. Create a function that performs multiple asynchronous operations in parallel using async/await and waits for all of them to complete before returning the results.

async function fn1(){
    let promise= new Promise((resolve,reject)=>{
        let flag=true;
        if(flag){
        setTimeout(()=>{
        console.log("Async function 1");
        resolve('Result from async function 1');
        },6000);
        }
       else{
        reject("there is some error");
       }
    })
    return promise;
}

async function fn2(){
     let promise= new Promise((resolve,reject)=>{
         let flag=true;
        if(flag){
        
        setTimeout(()=>{
            console.log("Async function 2");
         resolve('Result from async function 2');
        },8000)
        }
       else{
        reject("there is some error");
       }
    })
    return promise;
}

async function showParallelFunction(){
    try{
        const res=await Promise.all([fn1(),fn2()]);
        console.log("Result:",res);
        console.log();
    }
    catch(error){
        console.log("error");
    }
}

showParallelFunction();



