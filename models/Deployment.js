const mongoose = require('mongoose');
const Schema=mongoose.Schema;

//creating schema
const DeploymentScheme=new Schema({
    url:{
         type:String,
         required:true
    },
    templateName:{
        type:String,
        required:true
    },
    versionNo:{
        type:String,
        required:true
    }
})
module.exports=Deployment=mongoose.model('deployment',DeploymentScheme);