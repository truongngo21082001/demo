
var express = require('express');
var bodyParser = require('body-parser');

var usersRoute = require('./routes/user.route');

var port = 3000; 

var app = express();
app.set('view engine', 'pug');
app.set('view ','./views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));



app.get('/', (req, res) => {
    res.render('index');
})

app.use('./users', usersRoute);
app.listen(port, function(){
    console.log('server listening on port 3000')
}); 