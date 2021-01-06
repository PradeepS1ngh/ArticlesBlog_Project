const express = require('express');

const jwt = require('jsonwebtoken');
const config = require('config');

module.exports  = function(req,res,next){
    //token
    const token = req.header('x-auth-token');
    if(!token){
        return res.status(400).json({msg : "No Token Found"});
    }
    try {
        const decoded = jwt.verify(token,config.get('jwtSecret'));
        req.user = decoded.user;
        next();
    } catch (error) {
        res.status(400).json({msg : 'Token Not Valid'});
    }
}