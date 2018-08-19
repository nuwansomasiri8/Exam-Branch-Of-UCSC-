const express = require('express');
const router = express.Router();
const Cs1 = require('../models/cs1');
const Cs2 = require('../models/cs2');
const Is1 = require('../models/is1');
const Is2 = require('../models/is2');
const ExamPublished = require('../models/examPublished');
const config = require('../config/database');


router.post("/repeatFormCs",function(req, res) {
	const newCs1 = new Cs1({
		uIndex_no:req.body.uIndex_no,
		ENH_1101:req.body.ENH_1101,
		SCS_1101:req.body.SCS_1101,
		SCS_1102:req.body.SCS_1102,
		SCS_1103:req.body.SCS_1103,
		SCS_1104:req.body.SCS_1104,
		SCS_1105:req.body.SCS_1105,
		SCS_1106:req.body.SCS_1106,
		
		ENH_2101:req.body.ENH_2101,
		SCS_2101:req.body.SCS_2101,
		SCS_2102:req.body.SCS_2102,
		SCS_2103:req.body.SCS_2103,
		SCS_2104:req.body.SCS_2104,
		SCS_2105:req.body.SCS_2105,

		SCS_3101:req.body.SCS_3101,
		SCS_3102:req.body.SCS_3102,
		SCS_3103:req.body.SCS_3103,
		SCS_3104:req.body.SCS_3104,
		SCS_3105:req.body.SCS_3105,
		SCS_3106:req.body.SCS_3106,
		SCS_3107:req.body.SCS_3107,
		SCS_3108:req.body.SCS_3108,
		SCS_3109:req.body.SCS_3109,
		SCS_3110:req.body.SCS_3110,
		SCS_3111:req.body.SCS_3111,
		SCS_3112:req.body.SCS_3112,
		SCS_3113:req.body.SCS_3113,
		SCS_3114:req.body.SCS_3114,
		SCS_3115:req.body.SCS_3115,
		SCS_3116:req.body.SCS_3116,
		SCS_3118:req.body.SCS_3118,
		SCS_3119:req.body.SCS_3119,
		SCS_3120:req.body.SCS_3120,
		receipt_no:req.body.receipt_no
    });
    
    
    

	Cs1.saveCs1(newCs1,function (err,cs1) {
		if(err) {
            console.log(err);
			res.json({state:false,msg:"data not inserted"});
		}
		if(cs1) {
			res.json({state:true,msg:"data inserted"});
		}
	});
});

router.post("/repeatFormCs2",function(req, res) {
	const newCs2 = new Cs2({
		uIndex_no:req.body.uIndex_no,
		ENH_1102:req.body.ENH_1102,
		SCS_1107:req.body.SCS_1107,
		SCS_1108:req.body.SCS_1108,
		SCS_1109:req.body.SCS_1109,
		SCS_1110:req.body.SCS_1110,
		SCS_1111:req.body.SCS_1111,
		SCS_1112:req.body.SCS_1112,
		SCS_1113:req.body.SCS_1113,
		
		SCS_2106:req.body.SCS_2106,
		SCS_2107:req.body.SCS_2107,
		SCS_2108:req.body.SCS_2108,
		SCS_2109:req.body.SCS_2109,
		SCS_2110:req.body.SCS_2110,
		SCS_2111:req.body.SCS_2111,
		SCS_2112:req.body.SCS_2112,
		receipt_no:req.body.receipt_no
    });
    
	Cs2.saveCs2(newCs2,function (err,cs2) {
		if(err) {
            console.log(err);
			res.json({state:false,msg:"data not inserted"});
		}
		if(cs2) {
			res.json({state:true,msg:"data inserted"});
		}
	});
});

router.get('/getRepeatCs1/:uIndex_no',function(req, res){
	const query = {uIndex_no:req.params.uIndex_no};
	Cs1.findOne(query,function (err,csData1) {
		if (err) {
			throw err;
		}else{
			res.json({csData1});
		}	
	});		
});

	const d = new Date();
	const n = d.getFullYear();

router.get('/publishedExam',function(req, res){
	const query = {year:n};
	ExamPublished.findOne(query,function (err,pe) {
		if (err) {
			throw err;
		}else{
			res.json({pe});
		}	
	});		
});

router.post("/formPublished",function(req, res) {
	const d = new Date();
	const n = d.getFullYear();
	const newForm = new ExamPublished({
		semester:req.body.semester,
		year:n,
		lastDate:req.body.lastDate,
	});

	ExamPublished.saveForm(newForm,function (err,examPublished) {
		if(err) {
			res.json({state:false,msg:"data not inserted"});
		}
		if(examPublished) {
			res.json({state:true,msg:"data inserted"});
		}
	});
});

// router.get('/getPublishedData',function(req, res){
// 	const d = new Date();
// 	const query = d.getFullYear();
// 	FormPublish.findOne(query,function (err,publishedData) {
// 		if (err) {
// 			throw err;
// 		}else{
// 			res.json({
// 				publishedSem:publishedData.semester,
// 			});
// 		}	
// 	});		
// });

router.post("/repeatFormIs1",function(req, res) {
	const newIs1 = new Is1({
		uIndex_no:req.body.uIndex_no,
		ENH_1001:req.body.ENH_1001,
		IS_1001:req.body.IS_1001,
		IS_1002:req.body.IS_1002,
		IS_1003:req.body.IS_1003,
		IS_1004:req.body.IS_1004,
		IS_1005:req.body.IS_1005,
		IS_1006:req.body.IS_1006,
		IS_1007:req.body.IS_1007,
		
		ENH_2001:req.body.ENH_2001,
		IS_2003:req.body.IS_2003,
		IS_2004:req.body.IS_2004,
		IS_2005:req.body.IS_2005,
		IS_2006:req.body.IS_2006,

		IS_3001:req.body.IS_3001,
		IS_3002:req.body.IS_3002,
		IS_3003:req.body.IS_3003,
		IS_3004:req.body.IS_3004,
		IS_3005:req.body.IS_3005,
		IS_3006:req.body.IS_3006,
		IS_3007:req.body.IS_3007,
		IS_3008:req.body.IS_3008,
		IS_3009:req.body.IS_3009,
		IS_3010:req.body.IS_3010,
		IS_3011:req.body.IS_3011,
		IS_3012:req.body.IS_3012,
		IS_3013:req.body.SCS_3113,
		IS_3014:req.body.IS_3014,
		IS_3015:req.body.IS_3015,
		IS_3016:req.body.IS_3016,
		IS_3017:req.body.IS_3017,
		IS_3018:req.body.IS_3018,
		receipt_no:req.body.receipt_no
    });
    
    
    

	Is1.saveIs1(newIs1,function (err,is1) {
		if(err) {
            console.log(err);
			res.json({state:false,msg:"data not inserted"});
		}
		if(is1) {
			console.log(newIs1);
			res.json({state:true,msg:"data inserted"});
		}
	});
});


router.post("/repeatFormIs2",function(req, res) {
	const newIs2 = new Is2({
		uIndex_no:req.body.uIndex_no,
		IS_1008:req.body.IS_1008,
		IS_1009:req.body.IS_1009,
		IS_1010:req.body.IS_1010,
		IS_1011:req.body.IS_1011,
		IS_1012:req.body.IS_1012,
		IS_1013:req.body.IS_1013,
		IS_1014:req.body.IS_1014,
		
		IS_2007:req.body.IS_2007,
		IS_2008:req.body.IS_2008,
		IS_2009:req.body.IS_2009,
		IS_2010:req.body.IS_2010,
		IS_2011:req.body.IS_2011,
		IS_2012:req.body.IS_2012,
		receipt_no:req.body.receipt_no
    });
    
    
    

	Is2.saveIs2(newIs2,function (err,is2) {
		if(err) {
            console.log(err);
			res.json({state:false,msg:"data not inserted"});
		}
		if(is2) {
			console.log(newIs2);
			res.json({state:true,msg:"data inserted"});
		}
	});
});


module.exports = router;