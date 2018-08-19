const mongoose = require('mongoose');
const schema = mongoose.Schema;

    const d = new Date();
	const n = d.getFullYear();

const cs1Schema = new schema({
    

    uIndex_no:{ type: String,required:true},
    year:{ type: String,default:n},
    ENH_1101: { type: String, default: "---"  },
    SCS_1101: { type: String, default: "---"},
    SCS_1102: { type: String, default: "---"},
    SCS_1103: { type: String, default: "---"},
    SCS_1104: { type: String, default: "---"},
    SCS_1105: { type: String, default: "---"},
    SCS_1106: { type: String, default: "---"},

    ENH_2101: { type: String, default: "---"},
    SCS_2101: { type: String, default: "---"},
    SCS_2102: { type: String, default: "---"},
    SCS_2103: { type: String, default: "---"},
    SCS_2104: { type: String, default: "---"},
    SCS_2105: { type: String, default: "---"},

    
    SCS_3101: { type: String, default: "---"},
    SCS_3102: { type: String, default: "---"},
    SCS_3103: { type: String, default: "---"},
    SCS_3104: { type: String, default: "---"},
    SCS_3105: { type: String, default: "---"},
    SCS_3106: { type: String, default: "---"},
    SCS_3107: { type: String, default: "---"},
    SCS_3108: { type: String, default: "---"},
    SCS_3109: { type: String, default: "---"},
    SCS_3110: { type: String, default: "---"},
    SCS_3111: { type: String, default: "---"},
    SCS_3112: { type: String, default: "---"},
    SCS_3113: { type: String, default: "---"},
    SCS_3114: { type: String, default: "---"},
    SCS_3115: { type: String, default: "---"},
    SCS_3116: { type: String, default: "---"},
    SCS_3118: { type: String, default: "---"},
    SCS_3119: { type: String, default: "---"},
    SCS_3120: { type: String, default: "---"},
    receipt_no: { type: String, required: true }
});

const Cs1 = module.exports = mongoose.model("Cs1", cs1Schema);


module.exports.saveCs1 = function (newCs1, callback) {
    newCs1.save(callback);
};

// module.exports.findBy = function(registration_no,callback) {
// 	const query = {registration_no:registration_no};
// 	User.findOne(query,callback);

// };

// module.exports.findCsData1 = function(uIndex,callback) {
// 	const query = {uIndex:uIndex};
// 	Cs1.findOne(query,callback);
// };