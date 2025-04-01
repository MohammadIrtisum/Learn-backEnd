const express = require('express');
const app = express();

app.set('view engine', ejs);

app.use((req,res,next)=>{
    console.log(req.url);
    console.log("this in middleware");
    res.send('Hello World from middleware');
    return next();
}
)


app.get('/',(req,res)=>{
    res.send ('Hello World');
})
app.get('/about',(req,res)=>{
    res.send ('About Page');
})

app.listen(3000)
