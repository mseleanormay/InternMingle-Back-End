"use  strict";
const express= require("express");
const router = express.Router();
var connection = require('../connection');

router.route("/getUser")
.get(async (req, res, next)=> {
    connection.query('SELECT * FROM InternMingle.User;', function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results);
        res.send(results);
      });

   
})


module.exports = router;