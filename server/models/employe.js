const  mongoose = require("mongoose")

const EmployeSchema = new mongoose.Schema({
    name: String,
    email:String,
    password: String,
})

const  EmployeeModel=mongoose.model('Employee', EmployeSchema);

module.exports = EmployeeModel