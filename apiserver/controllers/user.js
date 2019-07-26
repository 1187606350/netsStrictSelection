const UserModel = require('../modules/user');
const bcrypt = require('bcrypt');
// const fs = require('fs');
// const path = require('path');
//修改头像
// const postChgAvatar = (req, res) => {
//   //得到用户文件，并移动到public
//   //因为传过来的文件乱码，设置文件名
//   let newFileName = new Date().getTime() + '_' + req.file.originalname;
//   //移动路径
//   let newPath = path.resolve(__dirname, '../public', newFileName);
//   //读文件
//   let fileData = fs.readFileSync(req.file.path);
//   //写文件
//   fs.writeFileSync(newPath, fileData);

//   //更新数据库头像
//   //获取用户ID
//   let userId = req.body.userId;
//   let newAvatar = `http://localhost:9090/${newFileName}`;
//   //更新数据库
//   UserModel.updateOne(
//     {
//       _id: userId,
//     },
//     {
//       avatar: newAvatar,
//     },
//   )
//     .then(data => {
//       if (data.nModified > 0) {
//         res.send({
//           code: 0,
//           msg: 'update success',
//           data: newAvatar,
//         });
//       } else {
//         res.send({
//           code: -1,
//           msg: '更新头像失败',
//         });
//       }
//     })
//     .catch(error => {
//       res.send({
//         code: -1,
//         msg: error.message,
//       });
//     });
// };
// register
const postRegister = (req, res) => {
  UserModel.findOne({
    username: req.body.username,
  }).then(data => {
    if (data) {
      res.send({
        code: -1,
        msg: '用户名已存在',
      });
    } else {
      let hashPassword = bcrypt.hashSync(req.body.password, 10);
      let username = req.body.username;
      let password = hashPassword;
      const user = new UserModel({
        username,
        password,
      });
      user
        .save()
        .then(() => {
          res.send({
            code: 0,
            msg: '注册成功',
          });
        })
        .catch(error => {
          res.send({
            code: -1,
            msg: error.message,
          });
        });
    }
  });
};

const postLogin = (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  UserModel.findOne({
    username,
  })
    .then(data => {
      if (data) {
        let bingo = bcrypt.compareSync(password, data.password);
        if (bingo) {
          res.send({
            code: 0,
            msg: '登录成功',
            data: {
              username: data.username,
            },
          });
        } else {
          res.send({
            code: -1,
            msg: '用户名或密码错误',
          });
        }
      } else {
        res.send({
          code: -1,
          msg: '用户名或密码错误',
        });
      }
    })

    .catch(error => {
      res.send({
        code: -1,
        msg: error.message,
      });
    });
};

module.exports = {
  postRegister,
  postLogin,
};
