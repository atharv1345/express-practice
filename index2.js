const express = require("express");
const port = 4000
const app = express();


app.get('/',function(req,res) {
    const message = req.body.message;
    //machine learning thingy
    res.send('<b> hii i am atharv<b>')
    res.json({
        output:"2 + 2 = 4"
    }) 
})
app.listen(port)