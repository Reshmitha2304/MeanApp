
var mongoose = require('mongoose');

var user = mongoose.Schema={
    name:String,
    email:String,
    add:String,
    pwd:String
}

module.exports=mongoose.model('user',user);

