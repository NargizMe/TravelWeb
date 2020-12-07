const express=require('express');
const Fly=require('../models/flyList');

const router=express.Router();

router.get('/get-fly-list',async (req,res)=>{
    const list=await Fly.find({});

    res.status(200).json({list});
})
module.exports=router;