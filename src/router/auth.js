const express = require("express");
const authRoute = express.Router();
const { Auth } = require("../controller");

authRoute.post('/login', async (req,res)=>{
    const query = req.query;
    console.log(query)
    const data = await Auth.getPS(query);
    res.json(data);
});
authRoute.post('/new', async (req,res)=>{
    const body = req.body;
    console.log(body);
    const data = await Auth.createAcc(body);
    res.json({data});
})
module.exports = authRoute;