const mongoose= require('mongoose')
const RislaListSchema= mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true 
    },
    unit:{
        type:String,
        required:true 
    },
    status:{
        type:String,
        default:"possibility",
        enum:["possibility", 'today', 'suscribed', 'rejected']
    }
})

const RisalaList= mongoose.model('RisalaList',RislaListSchema)
module.exports=RisalaList