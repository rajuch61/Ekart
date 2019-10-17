const express = require('express');
const mongos = require('mongoose');
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.json());
router.use(express.json());
router.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200'); // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');   // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Credentials', true); // Set to true if you need the website to include cookies in the requests sent
  next();
});

const userSchema = mongos.Schema({
  "name" : String,
  "email": String,
  "isAdmin" : String,
  "password" : String
  });
const User = mongos.model('User', userSchema);

router.post('/', async(req, res)=> {
  const email = req.body.email;
  const password = req.body.password;
  result = await User.findOne({"email" : email, "password" : password });
  res.send(result);
})

module.exports = router;