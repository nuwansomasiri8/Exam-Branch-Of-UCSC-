const config = require('./database');
const User = require('../models/user');


module.exports.verifytoken = function (req, res, next) {
    
    if(typeof(req.headers['authorization']) != 'undefined' && req.headers['authorization'] != 'undefined') {

    	 var headerToken = req.headers['authorization'].split(' ')[1];
    	 if (headerToken !== 'undefined') {
    	 	req.token = headerToken;
    	 	next();

    	 }else{
    	 	res.json({msg:"Unauthorized Request"})
    	 }

    }else{
    	res.json({msg:"Unauthorized Request"})
    }   
    
		
}		