/* Global Variables */
const apiKey = '&appid=1296b5f8c30e09bfad61d57e8a8dc4b7&units=imperial';
let baseUrl = `https://api.openweathermap.org/data/2.5/weather?zip=`;
const btnGenerate = document.getElementById('generate');
const tempI = document.getElementById('temp');
const content = document.getElementById('content');
const dateI = document.getElementById('date');

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = (d.getMonth() + 1) + '.' + d.getDate() + '.' + d.getFullYear();

//get 
const getFunction = async(base, zip, kapi) =>{
      try{
    const response = await fetch(base+zip+kapi);
    const data = await response.json();
    return data;
      } catch (e){
        console.log('Error', e)
        }
}
 //post
const postFunction = async (url = '', data = {}) => {
     await fetch(url, 
    {method: 'POST', body: JSON.stringify(data), credentials: "same-origin", headers: {'Content-Type': 'application/json'}})
      try{
        retrieveData();
      }catch(e){
        console.log('Error', e)
      }
}
//update UI
const retrieveData = async() =>{
    const request = await fetch(`http://localhost:3000/all`);  
    try{
    const allData = await request.json();
    dateI.innerHTML = `Today date: ${(allData.date)}`;
    tempI.innerHTML = `Today's Tempreture: ${Math.round(allData.temp)} Degrees`;
    content.innerHTML = `Your Feeling for today: ${(allData.content).toUpperCase()}`;
    } catch(e){
      console.log('Error', e)
    }
   }
   //call
   btnGenerate.addEventListener('click', () =>
 {  let entredFeeling = document.getElementById('feelings').value;
 let container = document.getElementById('feelings')
    let zip = document.getElementById('zip').value;
    let zipC = document.getElementById('zip');
    if(zip === ''){
      zipC.classList.add('zipInputError');
      zipC.classList.remove('zipInput');
    } else if(entredFeeling === ''){
      container.classList.add('textError');
      container.classList.remove('myInput');
    } else {
  getFunction(baseUrl, zip, apiKey)
    .then( (m) => {
      console.log(m)
     postFunction(`http://localhost:3000/add`,{ date: newDate, temp: m.main.temp, content: entredFeeling}) })   
    }}
    )
