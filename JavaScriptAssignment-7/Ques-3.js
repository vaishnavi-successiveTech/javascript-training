// Convert a callback-based API to a Promise-based API ()
// function fetchData(callback) {
//   setTimeout(() => {
//     callback(null, "Data fetched successfully");
//   }, 1000);
// }
const callAPI = () => {
  let promise = new Promise((resolve, reject) => {
    let success = Math.random() > 0.5;  // for random use it.
    setTimeout(() => {
      if (success) {
        fetch(`https://api.thecatapi.com/v1/images/search?limit=10`)
          .then((response) => response.json())
          .then((data) => resolve(data))
          .catch((err) => reject(`API Error: ${err}`)); // Catch any fetch errors
      } else {
        reject("Simulated API failure");
      }
    }, 4000); 
  });

  const result = promise
    .then((data) => console.log("Success:", data))
    .catch((msg) => console.log("Failure:", msg));

  return result;
};

callAPI();



