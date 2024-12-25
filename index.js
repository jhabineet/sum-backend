const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json())

app.use(cors());

app.get("/sum", function( req, res) {
    // console.log("hello before a");
    let a = parseInt(req.query.a);
    let b = parseInt(req.query.b);
    // console.log(a, b);
    sum = a + b;
    // console.log(sum);
    if(!sum) {
        res.status(400).send("Sum didn't get");
    } else {
        res.send(sum.toString());
        // console.log("got the sum", sum);
    }
})

app.get("/simple-interest", function(req, res) {
    let p = parseInt(req.query.p);
    let r = parseInt(req.query.r);
    let t = parseInt(req.query.t);
    si = p*r*(t);
    if(!si) {
        res.status(400).send("SI didn't get");
    } else {
        res.status(200).send(si.toString());
    }
    
})

app.listen(3000)