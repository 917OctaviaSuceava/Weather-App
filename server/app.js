var express = require('express');
var app = express();
var cors = require('cors');
app.use(express.json());
app.use(cors());
const axios = require('axios');
// default: 2ba33f47fe046f77711ed2800628f2b6
// f3fc5a8c5b60c4788393c60f5d83ddcd
var API_KEY = '2ba33f47fe046f77711ed2800628f2b6'; //
var URL = 'https://api.openweathermap.org/data/2.5/';

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.options('*', function (req, res) {
  res.sendStatus(200);
});


app.get('/', function (req, res) {
  res.send('Hello World!');
});

let lat;
let lon;

app.post('/cityData', (req, res) => {
  //console.log(req.body);
  //console.log(req.body.latitude); 
  //console.log(req.body.longitude);
  lat = req.body.latitude;
  lon = req.body.longitude;
  res.send('Data received!');
});

app.get('/getData', async (req, res) => {
    let result;
    try {
        console.log(lat); 
        console.log(lon);
        result = await axios.get(URL + "weather?lat=" + lat + "&lon=" + lon + "&appid=" + API_KEY + "&units=metric"); //
        console.log(result);
        //res.send(res.json(result.data));
        res.json(result.data);

    } catch (err) {
        console.error(`failed all api due to ${err.message}`);
    }
});


app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});