
const express = require('express');

const router = express.Router()

router.get("/api/:date" , function(req,res){
    const date = req.params.date;
    let formatdate = new Date(parseInt(date)).toUTCString();
    if(formatdate === "Invalid Date"){return res.status(401).send({"error" : "Inavlid Date"})}
    console.log(formatdate);
    const result = {
        "unix" : date,
        "utc" : formatdate
    }
    res.send(result);

})

router.get("/" , function(req,res){
    res.send("connected");
})


module.exports = router;