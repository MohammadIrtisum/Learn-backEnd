const express = require('express');
const app = express();
const morgan = require('morgan');
const userModel = require('./models/user');

app.set('view engine','ejs');

app.use(morgan('dev'));

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use((req,res,next)=>{
    console.log("this is middleware");
    // res.send("this middleware is used to log the request and response objects");
    return next();
})
app.get('/',(req,res,next)=>{
    const a=5;
    const b=10;
    console.log(a+b);

    next();
},(req,res)=>{
    res.render('index');
})
app.get('/about',(req,res)=>{
    res.send ('About Page');
})

app.post('/get-form-data',(req,res)=>{
    console.log(req.body);
    res.send('Form data received');
})

app.listen(3000)
