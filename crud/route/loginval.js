var express=require("express");
var bp=require("body-parser");
var db=require("../model/con");
var path = require('path');

var router=express.Router();
router.use(bp.json());
router.use(bp.urlencoded({ extended: true}));

//routing to home page
router.get("/",(req,res)=>{
   res.sendFile(path.resolve('view/home.html'));
})
    
//api for inserting
router.post("/insert",(req,res)=>{
    console.log(req.body);
    let Empdb = new db({
        name:req.body.userName,
        add:req.body.userAdd,
        email:req.body.userEmail,
        pwd:req.body.userPwd
    })
    Empdb.save((err)=>{
       if (err) 
       res.json(err);
       else
           res.json({success:true,msg:"Inserted successfully"});
    })
})

//api for login validation
router.post('/login',(req,res)=>{
    db.find({ name:req.body.userName },( err , result )=>{
        if(err) 
            res.json(err)
        else
        {
            if(result.length>0)
            {
                db.find({ pwd:req.body.userPwd },(err, data )=>{
                    if(data.length>0) 
                        return res.json({success:true,msg:"login successful"})
                    else
                        return res.json({success:false,msg:"password mismatched"})
                })
            }
            else
                return res.json({success:false,msg:"user not found"})
        }
    })
})

//api for updating
router.post("/update",(req,res)=>{
 console.log("body",req.body)
    db.updateOne({ name: req.body.name },{ $set : { name : req.body.uname } },(err)=>{
       if (err) throw err;
       else
         res.send("Updated successfully");
    })
})

//api for retriving data
router.get( "/retrive/:Username" ,( req , res ) => {
    
    console.log(req.query);
    // { name: req.query.Username }
    db.find({ name: req.query.Username },( err , result ) => {
       if ( err ) 
       return res.send(err);
       else
       return res.send(result);//.name + "<br>" + result.add + "<br>" + result.email);

    })
})

//api for deleting
router.post("/delete",(req,res)=>{
    
    db.deleteOne({ name : req.body.name },(err,result)=>{
       if (err) throw err;
       else
       {
           if(result.length<0)
            {     
                   res.send("sorry, user not presented");
            }
            else
                 res.send("Deleted successfully");
        }
    })
})

module.exports=router;