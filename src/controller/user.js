const {Op} = require("sequelize");
const {User} = require("../modal")

exports.getUser = async ({limit =1, page =1, key=""}) =>{
    try {
        const listuser = await User.findAll({
            where:{
                name: {[Op.substring]:key},
            },
            limit:Number(limit), offset:Number((page -1)*limit), });
        console.log(listuser)        
        return listuser;
    } catch (error) {
        
    }
}

exports.createUser = async (body) =>{
    try {
        const newUser = await User.create({...body});
        return newUser;        
    } catch (error) {
        
    }
}

exports.updateUser = async (body) =>{
    try {
        const {id, name, age, address,jobid} = body;
        const user1 = await User.findByPk(id);
        user1.name = name;
        user1.age = age;
        user1.address = address;
        user1.jobid = jobid;
        await user1.save();
        return user1;
    } catch (error) {
        
    }
}

exports.deleteUser = async (userid)=>{
try {
    const result = await user.destroy({ where: {id: userid}});
    return result;
} catch (error) {
    
}
}