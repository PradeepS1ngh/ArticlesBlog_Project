const express = require('express');
const router = express.Router();

const User = require('../Model/User');

// validation
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const config = require('config');

//@router   POST  /api/user/
//@desc     Register a User
//@access   Public
router.post('/',[
    body('name',"Please Enter the Name").not().isEmpty(),
    body('username',"Please Enter Unique userName").not().isEmpty(),
    body('email','Please Enter Valid Email').isEmail(),
    body('phone','Enter valid phone Number').isLength({ min: 10 }),
    body('password','Enter password of length atleast 5').isLength({ min: 5 }),
], async (req,res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {name , email , phone , proffession , age ,username, password } = req.body;
    try {
        let user = await User.findOne({username});
        if(user){
            return res.json({msg : "User Already Exists"})
        }

        user = new User({name,email,phone,proffession,age,username,password});

        //password bcrypt
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password,salt);

        await user.save();

        const payload = {
            user : {
                id : user.id
            }
        }

        jwt.sign(payload,config.get('jwtSecret'),{expiresIn : 30000},(err,token) => {
            if(err) throw err;
            return res.status(200).json({token});
        })
    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error");
    }

})

module.exports = router;