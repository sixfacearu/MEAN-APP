var mongoose=require('mongoose')
const Schema=mongoose.Schema;
var bcrypt=require('bcrypt');

schema=new Schema({
 email:{type:String,require:true},
 password:{type:String,require:true},
 c_date:{type:Date,require:true}
})
schema.statics.hashPassword=function hashPassword(password){
    return bcrypt.hashSync(password,10);
}
schema.methods.isValid=function(hashPassword){
    return bcrypt.compareSync(hashPassword,this.password)
}
module.exports=mongoose.model('user',schema)