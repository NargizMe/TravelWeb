const mongoose=require('mongoose');

const schema=new mongoose.Schema({
    from:{type:String, trim:true, required:false},
    to:{type:String, trim:true, required:false},
    departure:{type:String, trim:true, required:false},
    return:{type:String, trim:true, required:false},
},{ collection : 'travel' })

module.exports=mongoose.model('Fly',schema);