// 数据库model文件
const db = require('./../config/db');
// schema
const UserSchema = new db.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
// 表
module.exports = db.model('user', UserSchema);
