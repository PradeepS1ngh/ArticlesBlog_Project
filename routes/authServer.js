const express = require('express');
const router = express.Router();

const User = require('../models/User');

// validation
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const config = require('config');


//Protective Routing
const auth = require('../Middleware/auth');

//@route   GET /api/auth
//@desc    Get logged in User
//@access  private
router.get('/',auth,async (req,res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (error) {
        res.status(500).send('Server Error');
    }
})


//@route   POST /api/auth
//@desc    Auth User & get Token
//@access  public  
router.post('/',[
    body('username' , "Please Enter UserName").not().isEmpty(),
    body('password','Please Enter Password').not().isEmpty()
], async(req,res)=> {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {username , password} = req.body;
    try {
        const user = await User.findOne({username});
        if(!user){
            return res.status(400).json({msg : "Invalid Credentials"})
        }

        //password check
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({msg : "Invalid Credentials Password Not Match"})
        }

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

});



module.exports = router