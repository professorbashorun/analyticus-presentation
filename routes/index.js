express = require('express');
var router = express.Router();
var path = require("path");


/* GET home page. */
router.get("/", function(req, res){
      res.sendFile(path.join(__dirname, '../index.html'))
      console.log(path.join(__dirname, '../index.html') + "DDDDDDDDDDDDDDDDDDDDDDDDDDD");
 });




module.exports = router;
