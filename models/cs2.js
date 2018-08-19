const mongoose = require('mongoose');
const schema = mongoose.Schema;

const cs2Schema = new schema({

    uIndex_no:{ type: String,required:true},
    ENH_1102: { type: String, default: "---"},
    SCS_1107: { type: String, default: "---"},
    SCS_1108: { type: String, default: "---"},
    SCS_1109: { type: String, default: "---"},
    SCS_1110: { type: String, default: "---"},
    SCS_1111: { type: String, default: "---"},
    SCS_1112: { type: String, default: "---"},
    SCS_1113: { type: String, default: "---"},

    SCS_2106: { type: String, default: "---"},
    SCS_2107: { type: String, default: "---"},
    SCS_2108: { type: String, default: "---"},
    SCS_2109: { type: String, default: "---"},
    SCS_2110: { type: String, default: "---"},
    SCS_2111: { type: String, default: "---"},
    SCS_2112: { type: String, default: "---"},
    receipt_no: { type: String,required:true}
});

const Cs2 = module.exports = mongoose.model("Cs2", cs2Schema);


module.exports.saveCs2 = function (newCs2, callback) {
    newCs2.save(callback);
};

// module.exports.findByCs2 = function(registration_no,callback) {
// 	const query = {registration_no:registration_no};
// 	User.findOne(query,callback);

// };