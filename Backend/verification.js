const router = require("express").Router();
const jwt = require("jsonwebtoken");
const {User} = require("./db");

const authMiddleWare = async (req, res, next) => {
    

    try {
        if (req.header("authorization") !== null) {
            var token = req.header("authorization").split(" ")[1];
            const response = await jwt.verify(token, "tajbirthegreat");
        console.log(response.email);
        if(token === null)(
             res.status(404).send("Token not found")
        )
        const user = await User.findOne({ email: response.email },{password:0});
        if (!user) {
            return res.status(404).send("User not found");
        }
        console.log(user);
        req.user = user;
        next();
        }else{
            console.log("token is missing")
        }
        
    } catch (err) {
        
    }
}




router.get("/",authMiddleWare,(req, res) => {
    res.send({ verification: req.user });
});

module.exports = {router,authMiddleWare};
