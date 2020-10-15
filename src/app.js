const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

//connecting to db
mongoose.connect('mongodb://localhost:27017/foxes',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
.then(db=>console.log('db connected'))
.catch(err=> console.log(err))

// cron
require('./config/db/db');

//importing routers
const router = require('./config/routers/index');
// const { default: Axios } = require('axios');

//settings
app.set('port', process.env.PORT || 3000);
const PORT = app.get('port');

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//router
app.use('/',router);

// starting the server
app.listen(PORT, ()=>{
    console.log(`Server on PORT ${PORT}`)
})