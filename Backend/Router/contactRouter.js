const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message:{type:String}
});

const Contact = new mongoose.model("Contact",contactSchema);

router.post("/contact", async(req, res) => {
 try{
    const all = req.body;
    await new Contact(all).save();
    res.send({message:"Your message send successfully"})
 }catch(err){
    console.log(err.message)
 }
});

module.exports = {router,Contact};
