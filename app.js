var express = require('express');
var app = express();

const PORT = 5000;

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static('public'));

// ...
// createElement()

// index page
app.get('/', function(req, res) {
    res.render('index');
  });
  
app.listen(PORT);
console.log(`Server is running on port: ${PORT}`);