var express = require('express');
var handlebars = require('express-handlebars');
const index = require(__dirname + '/controllers/indexController.js');

var app = express();
var port = process.env.PORT || 3030;

app.use(express.static('public'));
app.set("views", __dirname + "/views/");



app.engine('hbs', handlebars({
    layoutsDir: __dirname + '/views/layouts/',
    extname: 'hbs',
    defaultLayout: 'layout',
    partialsDir: __dirname + '/views/partials/'
}));

app.set('view engine', 'hbs'); 


app.get('/', function (req, res) {
    index.CreatePage(req, res);
});

app.listen(port);