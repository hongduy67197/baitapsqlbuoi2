const route = require("express").Router();
const usermanager = require("./user");
const jobmanager = require("./job");
const authmanager = require("./auth");
route.use(authmanager);
route.use(usermanager);
route.use(jobmanager);
module.exports = route;