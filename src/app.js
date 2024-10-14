const express = require("express")

const app = express();

app.use("/",(req, res) => {
    res.send("Hello from the server")
})

app.use("/test",(req, res) => {
    res.send("Hello DC")
})

app.use("/home",(req, res) => {
    res.send("Hello VL")
})

app.listen(3000, ()=> {
    console.log("server listening on port 3000")
})