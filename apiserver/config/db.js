const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/netstrictselect';
mongoose
  .connect(url, { useNewUrlParser: true })
  .then(() => {
    console.log('database is connnected 👌');
  })
  .catch(error => {
    console.log('failure');
  });
module.exports = mongoose;
