const express = require("express");
const userRoute = express.Router();
const { User } = require("../controller")

userRoute.get('/user', async (req,res)=>{
    const query = req.query;
    console.log(query)
    const data = await User.getUser(query);
    res.json({
        data
    });
});
userRoute.post('/user', async (req,res)=>{
    const body = req.body;
    console.log(body);
    const data = await User.createUser(body);
    res.json({data});
});
userRoute.put('/user', async (req,res)=>{
    const body = req.body;
    const data = await User.updateUser(body);
    res.json([data]);
})
userRoute.delete('/user/:userId', async (req,res)=>{
    const userid = req.params.userid;
    const data =  await User.deleteUser(userid);
    res.json({data});

})
module.exports = userRoute;
