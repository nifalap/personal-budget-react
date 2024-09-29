// Budget API

const budgetData = require('./myBudget.json')
const express = require('express');
const cors = require('cors');
const fs = require('fs'); 
const app = express();
const port = 3000;

app.use(cors());

app.use('/', express.static('public'));

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.get('/budget', (req, res) => {
    //fs.readFile('chart.json', 'utf8', (err, data) => {
     //  const budget = JSON.parse(data); 
        res.json(budgetData);
 //   });
});

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});