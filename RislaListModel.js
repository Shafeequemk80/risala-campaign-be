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
        default:"hope",
        enum:["hope", 'today', 'suscribed', 'rejected']
    }
})

const RislaList= mongoose.model('RislaList',RislaListSchema)
module.exports=RislaList