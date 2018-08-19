const mongoose = require('mongoose');
const schema = mongoose.Schema;

const formPublishSchema = new schema({
    semester: { type: String },
    year: { type: String },
    lastDate: { type: String },
});

const formPublish = module.exports = mongoose.model("formPublish", formPublishSchema);

module.exports.saveForm = function (newForm, callback) {
    newForm.save(callback);
};

// module.exports.findSem = function (callback) {
//     find(query,function(err, user){
//         res.json(user);
//      });
// };