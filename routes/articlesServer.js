const express = require('express');
const router = express.Router();
//Schema
const Articles = require('../models/Articles');
//Protective Routing
const auth = require('../Middleware/auth');
const { body, validationResult } = require('express-validator');



//@route   GET /api/articles
//@desc    get all articles
//@access  public 
router.get('/',async (req,res) => {
    try {
        const allArticles = await Articles.find().sort({date : -1});
        res.send({Articles : allArticles});
    } catch (error) {
        res.send(500).send('Server Error');
    }
})



//@route   GET /api/articles/username
//@desc    get all articles by username
//@access  private 
router.get('/:username',auth,async(req,res)=>{
    try {
        const allArticles = await Articles.find({user : req.user.id}).sort({date : -1});
        res.json({Articles : allArticles});
    } catch (error) {
        res.send(500).send('Server Error');
    }
})



//@route   POST /api/articles
//@desc    create new articles
//@access  private
router.post('/',[auth, [
    body('tagname' , "Please Enter Tag").not().isEmpty(),
    body('heading','Please Enter Heading').not().isEmpty(),
    body('desc','Please Enter Desc.').not().isEmpty(),
]],async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { tagname , heading , desc , username } =req.body;
    try {
        console.log(req.user);
        let newArticle = new Articles({
            user : req.user.id,
            username,
            tagname,
            heading,
            desc
        })
        // console.log(newArticle);
        const article = await newArticle.save();

        res.json(article);

    } catch (error) {
        console.error(error.message);
        return res.send("Server Error");
    }
})



module.exports = router
