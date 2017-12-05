var qr = require('qr-image');  
var express = require('express');
var bodyParser = require('body-parser')
var app = express().use(express.static(__dirname + '/'));

app.use(express.static(__dirname + "/public"));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json());
app.get('/', function(req, res) {  
   //res.redirect("index.html");
   res.sendFile(__dirname + '/index.html');
});

app.post('/qr', function(req, res){

    var name = req.body.name;
    var mob = req.body.mob;
    var email = req.body.email;
    var address= req.body.address;
    var code = qr.image("Name : "+name+", Mobile : "+mob+", Email : "+email+", Address : "+address, { type: 'svg' });
    res.type('svg');
    code.pipe(res);
});

app.listen(3000);