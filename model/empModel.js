const mongoose = require("mongoose");


const empSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    department: { type: String, enum: ["tech", "Marketing", "Operations "] },
    salary: Number


}, {
    versionKey: false
});

const EmpModel = mongoose.model("emp", empSchema);


module.exports = ({ EmpModel })



// - First Name
// - Last Name
// - Email
// - Department (Select Tag with Tech, Marketing, and Operations as options)
// - Salary