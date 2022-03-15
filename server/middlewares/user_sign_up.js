const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const path = require('path');
const userModel = require('../Database/users');


/**
 * creating post route to recieve data from frontend
 */

router.route('/signup').get((req, res) => {
     res.send('this is the user signup route')
}).post((req, res) => {
     console.log(req.body)
     console.log(req.body.username)
     console.log('this is the user route')
     res.json(req.body);
     res.end()
})


module.exports = router;