const router = require ("express").Router();
const mongoose = require("mongoose")
const schema = new mongoose.Schema({})
const modu = new mongoose.model("Service",schema);
router.get("/deep",async(req,res)=>{
   try{
      const result =  await modu.find({});
   res.json(result)
   }catch(err){
      res.status(409).send("Error")
   }
})



module.exports = {router,modu};