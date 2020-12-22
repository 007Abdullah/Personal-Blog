
let users = [];


var express = require("express");
var cors = require('cors');
var morgan = require('morgan');
var bodyParser = require('body-parser');



var app = express();

app.use(cors());

// jaisa ya hum nai pora ak log banya han is kae liya hum package use karay gayn jo banae howa
// wo huma nai use karna han iskae liya "Morgan package use karay gayn"
// app.use(function (req, reponse, next) {
//     console.log("Method :" + req.method);
//     console.log("URL :" + req.url);
//     console.log("Connection is :" + req.connection.remoteAddress);
//     console.log("Connection is Port :" + req.connection.remotePort);
//     next();
// });

app.use(morgan('dev'));
app.use(bodyParser.json())

const urlencodedParse = bodyParser.urlencoded({ extended: false });

app.get('', (req, res) => {
    res.render('index');
})

app.get('/signup', (req, res) => {
    res.render('signup');
})

app.post('/signup', urlencodedParse, (req, res) => {
    console.log(JSON.stringify(req.body));
    res.send("Sign Up Succesfuly");
})





// app.post('/index', (req, res) => {
//     console.log('Got body:', req.body);
//     res.sendStatus(200);
// });

app.listen(3000, () => {
    console.log("server is running on 3000");
})