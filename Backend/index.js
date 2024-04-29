const express = require('express')
const app = express()
const port = 8080
const router = require("./Router/router")
const contactRouter = require("./Router/contactRouter")
const cors = require("cors")
const service = require("./service")
const verification = require("./verification")
const adminPanel = require("./adminPanel")
app.use(express.json())
app.use(cors());
app.use('/api/auth', router)
app.use("/api/form",contactRouter.router)
app.use("/api/service",service.router)
app.use("/api/verification",verification.router)
app.use("/api/admin",adminPanel)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})