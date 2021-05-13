const {Op} = require("sequelize");
const {Job} = require("../modal")

exports.getJob = async ({limit =1, page =1, key=""}) =>{
    try {
        const listjob = await Job.findAll({
            where:{
                title: {[Op.substring]:key},
            },
            limit:Number(limit), offset:Number((page -1)*limit), });
        console.log(listjob)        
        return listjob;
    } catch (error) {
        
    }
}

exports.createJob = async (body) =>{
    try {
        const newJob = await Job.create({...body});
        return newJob;        
    } catch (error) {
        
    }
}

exports.updateJob = async (body) =>{
    try {
        const {id, title, salary, address} = body;
        const job1 = await Job.findByPk(id);
        job1.title = title;
        job1.salary = salary;
        job1.address = address;
        await job1.save();
        return job1;
    } catch (error) {
        
    }
}

exports.deleteJob = async (jobid)=>{
try {
    const result = await Job.destroy({ where: {id: jobid}});
    return result;
} catch (error) {
    
}
}