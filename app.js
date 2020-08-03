const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const todoRoutes = require('./routes/todoRoutes')
//db connect
const dbUrl = ''
mongoose.connect(dbUrl,{useNewUrlParser:true,useUnifiedTopology:true})
.then((result)=>{
    console.log('Database Connected')
    app.listen(process.env.PORT || 3000 ,()=>{
        console.log("Server Started at port 3000")
    })
}).catch(console.log)

//middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.redirect('todos')
})

app.get('/about',(req,res)=>{
    res.render('about',{title:'About'})
})

app.use('/todos',todoRoutes)
