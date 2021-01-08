const express = require('express');
const router = express();

const Articles = require('../models/Articles');

//@route   GET /api/tag/tagName
//@desc    get articles by tagName
//@access  public 
router.get('/:tagname' , async(req,res)=> {
    let tag = req.params.tagname;
    try {
        const allArticles = await Articles.find({tagname : tag}).sort({date : -1});
        return res.status(200).json({Articles : allArticles});
    } catch (error) {
        return res.status(500).send("Server Error");
    }
})


module.exports = router;
