const express = require('express'); //Library
const app = express(); //Imports all the functions of the express library

app.set('view engine', 'ejs'); //Makes the view engine EJS so you can code HTML

app.get('/', function(req,res) //Displays on localhost/ - Gets the webpage directory to read.
{
  console.log('Hello World!'); //Displays hello world.
  res.render('home'); //Reads the home.ejs file in the views folder.
});

app.listen(80); //The port it listens on! Port 80 is usually the default web server port.
