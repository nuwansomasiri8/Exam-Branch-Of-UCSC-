const express = require('express');
const router = express.Router();
const User = require('../models/user');
const examPublished = require('../models/examPublished');
const Cs1 = require('../models/cs1');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const verify = require('../config/verify');


router.post("/register",function(req, res) {
	const newUser = new User({
		index_no:req.body.index_no,
		registration_no:req.body.registration_no,
		user_name:req.body.user_name,
		full_name:req.body.full_name,
		mobile_no:req.body.mobile_no,
		fixed_no:req.body.fixed_no,
		email:req.body.email,
		password:req.body.password,
		category:req.body.category
	});

	User.saveUser(newUser,function (err,user) {
		if(err) {
			res.json({state:false,msg:"data not inserted"});
		}
		if(user) {
			res.json({state:true,msg:"data inserted"});
		}
	});
});

router.post("/login",function(req, res) {
	const registration_no = req.body.registration_no;
	const password = req.body.password;

	const d = new Date();
	const year = d.getFullYear();

	
	


	User.findById(registration_no,function (err,user) {

		if(err) throw err;

		if (!user){
			res.json({state:false,msg:"No user found"});
			return false;
		}
		User.passwordCheck(password,user.password,function (err,match) {
			if(err) throw err;

			if(match) {
				
				jwt.sign({user}, config.secret, {expiresIn:86400}, function(err,token) {
					
				
					
	            	if (err) {
	            		throw err;
	            	}else{
						// examPublished.findOne(year,function(err, semester){
						// 	res.json({
						// 		semester:semester.semester});
						//  });
	            		res.json(
	            		{
	                         state:true,
	                         token:"Bearer " + token,
							 level:user.category,
	                         user:{
	                         	id:user._id,
	                         	user_name:user.user_name,
	                         	index_no:user.index_no,
	                         	registration_no:user.registration_no,
								email:user.email,
	                         }

	            		});
	            	}
                });
                
			}else{
              res.json({state:false,msg:"Password does not match"});
			}

		});
			

	});

});

router.get('/profile', verify.verifytoken, function(req, res) {
    
	jwt.verify(req.token, config.secret, function(err,data) {
		if (err) {
			throw err;
		}else{
			//const cs1Data = config.collection('cs1').find({ ENH_1102: 'true' });
			res.json({user:data.user});
		}
	});
       
    }
);

module.exports = router;


