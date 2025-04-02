const express = require('express');
const app = express();

app.set('view engine','ejs');


app.use((req,res,next)=>{
    console.log("this is middleware");
    // res.send("this middleware is used to log the request and response objects");
    return next();
})
app.get('/',(req,res)=>{
    res.render('index');
})
app.get('/about',(req,res)=>{
    res.send ('About Page');
})

app.listen(3000)
