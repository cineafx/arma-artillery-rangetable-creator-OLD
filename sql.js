const mysql = require('mysql2')
var util = require('util')
var options = require('./config.json')
var pool = mysql.createPool(options)

pool.query = util.promisify(pool.query) // Magic happens here.
pool.execute = util.promisify(pool.execute) // Magic happens here.
module.exports = pool
