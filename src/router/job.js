const express = require("express");
const jobRoute = express.Router();
const { Job } = require("../controller")

jobRoute.get('/job', async (req,res)=>{
    const query = req.query;
    console.log(query)
    const data = await Job.getJob(query);
    res.json({
        data
    });
});
jobRoute.post('/job', async (req,res)=>{
    const body = req.body;
    console.log(body);
    const data = await Job.createJob(body);
    res.json({data});
});
jobRoute.put('/job', async (req,res)=>{
    const body = req.body;
    const data = await Job.updateJob(body);
    res.json([data]);
})
jobRoute.delete('/job/:jobId', async (req,res)=>{
    const jobid = req.params.jobid;
    const data =  await Job.deleteJob(jobid);
    res.json({data});
})
module.exports = jobRoute;