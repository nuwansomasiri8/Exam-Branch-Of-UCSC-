const mongoose = require('mongoose');
const schema = mongoose.Schema;

const is1Schema = new schema({
    uIndex_no:{ type: String,required:true},
    ENH_1001: { type: String, default: "---"},
    IS_1001: { type: String, default: "---"},
    IS_1002: { type: String, default: "---"},
    IS_1003: { type: String, default: "---"},
    IS_1004: { type: String, default: "---"},
    IS_1005: { type: String, default: "---"},
    IS_1006: { type: String, default: "---"},
    IS_1007: { type: String, default: "---"},

    ENH_2001: { type: String, default: "---"},
    IS_2003: { type: String, default: "---"},
    IS_2004: { type: String, default: "---"},
    IS_2005: { type: String, default: "---"},
    IS_2006: { type: String, default: "---"},

    
    IS_3001: { type: String, default: "---"},
    IS_3002: { type: String, default: "---"},
    IS_3003: { type: String, default: "---"},
    IS_3004: { type: String, default: "---"},
    IS_3005: { type: String, default: "---"},
    IS_3006: { type: String, default: "---"},
    IS_3007: { type: String, default: "---"},
    IS_3008: { type: String, default: "---"},
    IS_3009: { type: String, default: "---"},
    IS_3010: { type: String, default: "---"},
    IS_3011: { type: String, default: "---"},
    IS_3012: { type: String, default: "---"},
    IS_3013: { type: String, default: "---"},
    IS_3014: { type: String, default: "---"},
    IS_3015: { type: String, default: "---"},
    IS_3016: { type: String, default: "---"},
    IS_3017: { type: String, default: "---"},
    IS_3018: { type: String, default: "---"},
    receipt_no: { type: String, required: true }
});

const Is1 = module.exports = mongoose.model("Is1", is1Schema);

module.exports.saveIs1 = function (newIs1, callback) {
    newIs1.save(callback);
};