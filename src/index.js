const path = require('path');
const express = require('express');
const {engine} = require('express-handlebars');
const morgan = require('morgan');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('combined'));
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'rescources/views'));
app.get('/', (req, res) => {
  res.render('home')
})
app.get('/tintuc', (req, res) => {
  res.render('new')
})
app.listen(port, () => {
  console.log(`Example app listening on port at http://localhost:${port}`)
})