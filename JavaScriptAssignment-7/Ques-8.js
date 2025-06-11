//Create a function that fetches data from multiple APIs in parallel and then performs some operation on the combined data, using async/await.
async function functionAPI(){
    try{
        let response=await fetch(`https://jsonplaceholder.typicode.com/todos/3`);
        let data=await response.json();
         return data;
        console.log(data);
    }
    catch(error){
        console.log("Error:",error);
    };
}functionAPI() ;

async function functionAPI2(){
    try{
        let response=await fetch(`https://jsonplaceholder.typicode.com/todos/4`);
        let data=await response.json();
        // console.log(data);
         return data;
    }
    catch(error){
        console.log("Error:",error);
    };
   
}
async function operationFetchData(){
    try{
    const [first,second]=await Promise.all([functionAPI() ,functionAPI2()]);
    const combined={
        idPerson:first.id,
        idPerson2:second.id,
    };
    console.log("Combined data :",combined);}
    catch(error){
        console.error("Error",error);
    }
}


operationFetchData();