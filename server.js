// Setup empty JS object to act as endpoint for all routes
projectData = {};
//extensions
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

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
app.get(`/all`, (req,res)=>{
     console.log(projectData);
     res.send(projectData);
  
});

app.post(`/add`, (req,res)=>{
    projectData = req.body
    console.log(projectData);
    res.send(projectData);
});