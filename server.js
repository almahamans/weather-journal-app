// Setup empty JS object to act as endpoint for all routes
projectData = {};
//extensions
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const { request } = require('express');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());
//initialize project folder
app.use(express.static('website'));
//setup the server
const port = 3000;
const server = app.listen(port, ()=>{
    console.log(`Server is running at port ${port}`);
});
//routes
app.get('/', (req,res)=>{
    res.send(projectData);
});

app.post('/', (req,res)=>{
    let data = req.body;
    let newData ={
        temp: data.temp,
        date : data.date,
        feel: data.feel
    };
    projectData.push(newData);
    res.send('Reseved!');
    console.log(newData);
    return newData;
});