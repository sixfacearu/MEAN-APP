var express = require('express');
var router = express.Router();
var user=require('../models/user')
/* GET users listing. */
router.post('/register', function(req, res, next) {
  register(req,res);
});
async function register(req,res){
var user=new user({
  email:req.body.email,
  password:user.hasspassword(req.body.password),
  c_date:Date.now()
})
try{
  doc=await user.save();
  return res.status(200).json(doc)
}
catch(err){
  return res.status(200).json(err)
}
}
module.exports = router;
