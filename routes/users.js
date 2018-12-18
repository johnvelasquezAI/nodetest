var express = require('express');
var router = express.Router();
var email = require("emailjs");
var server = email.server.connect({
  user: "johnqimatest@gmail.com",
  password: "hunt@r93",
  host: "smtp.gmail.com",
  ssl: true
});
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource 2');
});

/* GET users listing. */
router.post('/test', function (req, res, next) {
  
  console.log(req.body);
  // send the message and get a callback with an error or details of the message that was sent
  server.send({
    text: JSON.stringify(req.body),
    from: "Me <hunter93john@gmail.com>",
    to: "John <john.velasquez@qima.com>",
    cc: "",
    subject: "testing emailjs"
  }, function (err, message) { console.log(err || message); });
  res.send('Ok');
});

module.exports = router;
