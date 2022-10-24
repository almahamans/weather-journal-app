/* Global Variables */
const apiKey = '1296b5f8c30e09bfad61d57e8a8dc4b7&units=imperial';
let zip = document.getElementById('zip').value;
let baseUrl = `https://api.openweathermap.org`;
const btnGenerate = document.getElementById('generate');
const tempI = document.getElementById('temp');
const content = document.getElementById('content');
const dateI = document.getElementById('date');
let entredFeeling = document.getElementById('feelings').value;

let dataObj = {};
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
//dateI.innerHTML = newData;
//get 
const getFunction = async(url) =>{
const response = await fetch(url,{method: 'GET', mode:'no-cors'});
try{
const theData = await response.json();
console.log(theData);
}
catch(error){
    console.log('error',error);
}
}
btnGenerate.addEventListener('click', () =>
    getFunction(`${baseUrl}/data/2.5/weather?q=${zip}&mode=html&units=metric&appid=${apiKey}`));

//post
const postFunction = async (url, data) => {
    const response = await fetch(url, {method: 'POST',body: JSON.stringify(data),mode: 'no-cors',
      headers: {
        "Accept": "application/json",
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*"
      }});
      data = {entredFeeling, newDate};
};

postFunction(baseUrl, dataObj).then(()=>{
    retrieveData();
});
//update UI
const retrieveData = async() =>{
    const request = await fetch(`${baseUrl}/data/&appid=${apiKey}`);
    try {
    const allData = await request.json();
    console.log(allData);
    tempI.innerHTML = `${Math.round(allData.temp)} degrees`;
    content.innerHTML = allData.feel;
    dateI.innerHTML =allData.date;
    }
    catch(error) {
        console.log('error',error);
    }
   }
