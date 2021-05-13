const Sequelize = require("sequelize");
const sequelize = new Sequelize("Baitap_sql2","root","190397050197",{
    host:"localhost",
    dialect:"mysql",
    logging: true,
    sync: true
});
sequelize.sync();

module.exports = sequelize;