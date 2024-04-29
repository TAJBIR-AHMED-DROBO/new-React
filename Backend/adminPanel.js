const router = require("express").Router();
const { User } = require("./db");
const { Contact } = require("./Router/contactRouter");
const { modu } = require("./service");
const { authMiddleWare } = require("./verification");

router.get("/user", authMiddleWare, async (req, res) => {
  try {
    const userInfo = await User.find({}).select({ password: 0 });
    res.send({ userInfo });
  } catch (err) {
    res.send("User Not found");
  }
});

router.get("/contact", async (req, res) => {
  try {
    const userInfo = await Contact.find({}).select({ password: 0 });
    res.send(userInfo);
  } catch (err) {
    res.send("User Not found");
  }
});

router.post("/contact", async (req, res) => {
    try {
       await Contact.deleteOne({_id:req.body.id});
      res.send("deleted successfully");
    } catch (err) {
      res.send("User Not found");
    }
  });

router.get("/service", authMiddleWare, async (req, res) => {
  try {
    const userInfo = await modu.find({}).select({ password: 0 });
    res.send(userInfo);
  } catch (err) {
    res.status(404).send("User  Not found");
  }
});




router.post("/delete", async (req, res) => {
  try {
    const id = req.body.id;
    await User.deleteOne({ _id: id });
    res.send("User deleted successfully");
  } catch (err) {
    res.send("something is missing");
  }
});

router
.route("/edit/:id")
  .get(async (req, res) => {
    try {
      const id = req.params.id;
      const user = await User.findOne({ _id: id }, { password: 0 });
      res.send(user);
    } catch (err) {
      res.send("something is missing");
    }
  })
  .post(async (req, res) => {
    const id = req.params.id;
    await User.updateOne({_id:id},{...req.body})
    res.send(req.body)
  });

module.exports = router;
