// Convert a callback-based API to a Promise-based API ()
// function fetchData(callback) {
//   setTimeout(() => {
//     callback(null, "Data fetched successfully");
//   }, 1000);
// }


const callAPI=()=>{
    let promise = new Promise((resolve, reject) => {
        let success=true;
        setTimeout(()=>{
        if(success){

             fetch(`https://api.thecatapi.com/v1/images/search?limit=10`)
             .then((response)=>response.json()
             .then((data)=>resolve(data)))
             .catch((err)=>reject(err));
        }
    },4000);

    });
    const result= promise.then(data=>console.log(data)).catch(msg=>console.log(msg));
    return result;
}
callAPI()



