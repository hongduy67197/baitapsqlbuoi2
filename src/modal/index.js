const User = require("./user");
const Job = require("./job");

Job.hasMany(User, { foreignKey: {name: "userid" }});
User.belongsTo(Job, {foreignKey:{name:"userid"}});

module.exports = {
    User,
    Job,
}