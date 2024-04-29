const { User } = require("../db");
const bcrypt = require("bcrypt");


const register = async (req, res) => {
  try {
    const { password, email } = req.body;
    const hashedPassword = await bcrypt.hashSync(password, 10);
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(409).send({
        message: "This Email Is Exist.Try With Another Email",
      });
    }

 

   const taj =  await new User({ ...req.body, password: hashedPassword }).save();
   const token = await taj.generateToken();
    res.send({ message: "Sign Up Successfully" , token,userId:taj._id.toString()});
  } catch (err) {
    console.log(err);
  }
};


module.exports = { register };
