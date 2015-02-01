var express = require('express');
var app = express();
app.get('/', function(req, res) {
	res.sendFile(__dirname + '/main.html');
});
app.listen(3000);
console.log('listening on port 3000...');
app.use(express.static(__dirname));