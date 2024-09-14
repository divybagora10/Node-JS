const mongoose = require ("mongoose");

const userSchema = mongoose.Schema({
    firstName : {type : String ,required : true},
    lastName : {type : String},
    email : {type : String , required : true , unique : true},
    contactDetails : {type : String},
    gender : {type : String},
},
{timestamps :true}
);


module.exports = userSchema;
