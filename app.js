// Module Dependencies
var express = require('express');
var app = express();
var cool = require('cool-ascii-faces');
var handlebars = require('express3-handlebars');
var path = require('path');


// Environments
app.set('port', (process.env.PORT || 3000));
app.use(express.static(__dirname + '/public'));
app.set('views', path.join(__dirname, 'views'));
// app.engine('handlebars', handlebars({defaultLayout : 'master'}));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');


app.get('/', function(request, response) {
  response.render('landing');
});


app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});

