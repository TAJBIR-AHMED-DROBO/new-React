const router = require("express").Router()
const {home,register} = require("../Controller/auth-controller")
const { User } = require("../db");
const bcrypt = require("bcrypt");
// router.get("/",home)

router.post("/register",register)
router.post("/login",async (req,res) =>{
    try {
        const { password, email } = req.body;
       
        const userExist = await User.findOne({ email: email });
        if (!userExist) {
          return res.status(409).send({
            message: "This Email Is Not Exist.Try With Another Email",
          });
        }
    const use = await bcrypt.compare(password,userExist.password)
    const token = await userExist.generateToken();
    if(use){
        res.send({ message: "Login Successfully" , token,userId:userExist._id.toString()});
    }else{
      res.status(409).send({message:"Invalid User Or Password"})
    }
  
     
      } catch (err) {
        console.log(err);
      }
})

module.exports = router;




