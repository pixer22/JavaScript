var userDb = require("./userDb");
var auth = require("./auth");

module.exports = require("./usersClass")(auth, userDb);