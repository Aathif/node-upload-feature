const express = require('express');

const path = require('path');
const exphbs = require('express-handlebars');
const app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout:null}));
app.set('view engine', 'handlebars');




//Route
app.use('/', require('./routes/index'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server started at port ${PORT}`))