const knex = require("knex")
const config = require("../knexfile")[process.NODE_ENV || "development"]
module.exports = knex(config)