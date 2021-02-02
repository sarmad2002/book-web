if(process.env.NODE_ENV !== 'production')
{
    require('dotenv').config();
}
const express=require('express');
const app=express();
const expresslayout=require('express-ejs-layouts');

const routeindex=require('./routes/index')
app.set('view engine','ejs');
app.set('views',__dirname+'/views');
app.set('layout','layouts/layout')
app.use(expresslayout);
app.use(express.static('public'));
app.use('/',routeindex);

const mongoose=require('mongoose');
mongoose.connect(process.env.DATABASE_URL ,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    
})
const db=mongoose.connection
db.on('error',error=>console.error(error));
db.once('open',()=>console.log("connected to database"))

app.listen(80)