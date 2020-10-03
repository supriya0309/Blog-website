var express = require('express');
var app = express();


// set the view engine to ejs
app.set('view engine', 'ejs');

//static files
app.use(express.static('public'));
app.use('/css',express.static(__dirname + 'public/css'));



// index page
app.get('/', function(req, res) {
    res.render('pages/index');
});
// about page
app.get('/about', function(req, res) {
    res.render('pages/about');
});
app.get('/', function(req, res) {
    res.render('pages/customer.html');
});





app.listen(8000);
console.log('8000 is the magic port');