const express=require( 'express');
const router=express.Router(); 
const Deployment= require('../../models/Deployment');

// router  get home

router.get('/',(req,res)=>{
    Deployment.find()
    .then(deployment=>res.json(deployment))
})


// post request insert the deployment

router.post('/',(req,res)=>{ 
    const newDeployment=new Deployment({
        url:req.body.url,
        templateName:req.body.templateName,
        versionNo:req.body.versionNo
    })
    newDeployment.save().then(d=>res.json(d));
})


//delete the item 

router.delete('/:id',(req,res)=>{ 
    Deployment.findById(req.params.id)
    .then( d =>d.remove().then(()=>res.json(   {success:true})))
    .catch(err=>res.status(404).json({success:false}));
});
module.exports=router; 