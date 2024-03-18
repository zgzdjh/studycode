/**
 * 数据库连接
 */
const mongoose = require('mongoose')
const config = require('./index')
const log4js = require('./../utils/log4js')

// 官方给的连接方式
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(config.URL);
}

const db = mongoose.connection;

db.on('error',() => {
    log4js.error("***数据库连接失败***")
})

db.on('open',() => {
    log4js.info("***数据库连接成功***")
})