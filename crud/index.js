var express=require("express");
var mongoose=require("mongoose");
var cors=require("cors");

//requiring controllers
var crud=require("./route/loginval");
var path = require('path');

var app=express();
var port=process.env.PORT || 3000

app.use(cors());
app.use(express.static(path.join(__dirname,'view')))
app.use('/',crud);
// app.use(function(req,res){
//     res.header('Access-Control-Allow-Origin', '*');
// });
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//connecting to database
var con=mongoose.connection;
var url="mongodb://reshu:reshu2304@ds161062.mlab.com:61062/first"
mongoose.connect(url);

con.on("err",()=>{
    console.log("error occured");
})

con.on("open",()=>{
    console.log("conection established");
})

app.listen(port,(err)=>{
    if(err)
    throw err;
    console.log("listening....");
})
