const express = require('express');
const expressHandlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const info = [];
const fs = require('fs');
const app = express()

app.engine('handlebars', expressHandlebars());
app.set('views', './views');
app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));



app.get("/", function (req, res) {
  res.render('home', {
    data: info
})
});

app.post("/", function(req, res){
  let todoItem = req.body.todoItem
  info.push(todoItem);
  res.redirect("/")
});

app.use(express.static('public'));


app.listen(3000);

console.log("listening on 3000");
