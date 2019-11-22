const Sequelize = require("sequelize");
const config = require('config')
const Redis = require('ioredis')
const mysqlConfig = config.get('mysql')
const redisConfig = config.get('redis')

const dbPool = new Sequelize(mysqlConfig.database, mysqlConfig.username, mysqlConfig.password, mysqlConfig);
const redis = new Redis(redisConfig)
module.exports = {dbPool, redis}
