const mongoose = require('mongoose');
const schema = mongoose.Schema;


const is2Schema = new schema({
    uIndex_no:{ type: String,required:true},
    IS_1008: { type: String, default: "---"},
    IS_1009: { type: String, default: "---"},
    IS_1010: { type: String, default: "---"},
    IS_1011: { type: String, default: "---"},
    IS_1012: { type: String, default: "---"},
    IS_1013: { type: String, default: "---"},
    IS_1014: { type: String, default: "---"},

    IS_2007: { type: String, default: "---"},
    IS_2008: { type: String, default: "---"},
    IS_2009: { type: String, default: "---"},
    IS_2010: { type: String, default: "---"},
    IS_2011: { type: String, default: "---"},
    IS_2012: { type: String, default: "---"},
    receipt_no: { type: String, required: true }
});

const Is2 = module.exports = mongoose.model("Is2", is2Schema);

module.exports.saveIs2 = function (newIs2, callback) {
    newIs2.save(callback);
};