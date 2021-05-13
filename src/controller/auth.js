const {Op} = require("sequelize");
const { Auth } = require("../modal")

exports.getPS = async () =>{
    try {
        const checkACC = await Auth.findByPk({
            where:{
                username: {[Op.like]:key},
                password: {[Op.like]:key},
            }
        })
        if(checkACC.length){
            return res.json('dang nhap thanh cong');
        }else{
            return res.json('dang nhap that bai');
        }
    } catch (error) {
        
    }
}
exports.createAcc = async (body) =>{
    try {
        const newAcc = await Auth.create({...body});
        return newAcc;
    } catch (error) {
        
    }
}