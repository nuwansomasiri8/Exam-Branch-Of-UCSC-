const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const schema = mongoose.Schema;

const userSchema = new schema({

	index_no:{type:String,required:true},
	registration_no:{type:String,required:true},
	user_name:{type:String,required:true},
	full_name:{type:String,required:true},
	mobile_no:{type:String,required:true},
	fixed_no:{type:String,required:true},
	email:{type:String,required:true},
	password:{type:String,required:true},
	category:{type:String,required:true}
});

const User = module.exports = mongoose.model("User",userSchema);

module.exports.saveUser = function (newUser,callback){

	bcrypt.genSalt(10, function(err, salt) {
		bcrypt.hash(newUser.password, salt, function(err, hash) {
			newUser.password = hash;

			if (err) throw err;
			newUser.save(callback);
		});
	});
};

module.exports.findById = function(registration_no,callback) {
	const query = {registration_no:registration_no};
	User.findOne(query,callback);
};

module.exports.passwordCheck = function (plainpassword,hash,callback) {
	bcrypt.compare(plainpassword, hash, function(err, res) {
		if(err) throw err;

		if (res) {
			callback(null,res);
		}
	});
};
