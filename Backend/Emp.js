const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create a Model and Schema for Employee
const EmpSchema = new Schema({
    employeeName: {
        type: String, 
        required: [true, "Employee Name is Required"]
    },
    employeePosition: {
        type: String,
        required: [true, "Employee Postion is Required"]
    },
    employeePic: {
        type: String,
        required: [true, "Employee Picture is Required"]
    }
});

const Emp = mongoose.model("emp", EmpSchema);
module.exports = Emp;