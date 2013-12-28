var express = require('express');

var app = express();

app.use(express.static('./public'));

app.use(express.bodyParser());

app.listen(8005);

console.log('listening on 8005');