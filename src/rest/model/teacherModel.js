var mongoose = require('mongoose'); // NOTE ilker this is ODM (Object Data Modeller) used to model and access mongodb
var Schema = mongoose.Schema;


var teacherModel = new Schema({
    teacherId: { type: String, index: true, unique: true }, // NOTE ilker will create an index in mongodb
    name: String,
    lastname: { type: String, trim: true, lowercase: true },
    title: { type: String, trim: true, lowercase: true, enum: ['head ', 'professor', 'counselor', 'chair'] },
    age: { type: Number, required: true, min: 10, max: 1000 },
    isFullTime: { type: Boolean, default: true },
    updatedOn: { type: Date, default: Date.now } // NOTE ilker by default will have value like "2017-12-03T11:11:16.152Z"
});


module.exports = mongoose.model("Teacher", teacherModel);