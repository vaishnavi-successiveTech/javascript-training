// 7. Create a function that performs multiple asynchronous operations in parallel using async/await and waits for all of them to complete before returning the results.

const fnCallback1 =async ()=>{
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
 const fnCallback2 =async ()=>{
     let promise= new Promise((resolve,reject)=>{
        let success = Math.random() > 0.5;
        if(success){
        
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

const showParallelFunction=async()=>{
    try{
        const res=await Promise.all([fnCallback1(),fnCallback2()]);
        console.log("Result:",res);
        console.log();
    }
    catch(error){
        console.log("error");
    }
}

showParallelFunction();



