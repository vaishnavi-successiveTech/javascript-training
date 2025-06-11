// Give an example of using a callback function to handle an asynchronous operation in JavaScript (Use any open api to make a call)
// https://api.thecatapi.com/v1/images/search?limit=10

const catDetailsUrl = "https://api.thecatapi.com/v1/images/search?limit=10";

const fetchCatDetails = (url,callCatInfo)=>{
  fetch(url)
  .then(response=>{
   if(!response.ok){
    throw new Error(`HTTP error ${response.error}`);
   }
   return response.json();

}).then(data =>callCatInfo(null,data))
   .catch(error => {
      callCatInfo(error, null);
    });
}


function handleCatInfo(error, data) {
  if (error) {
    console.error("Error fetching cat data:", error);
  } else {
    console.log("Cat data available:", data);
  }
}

fetchCatDetails(catDetailsUrl, handleCatInfo);

console.log("Cat details...");