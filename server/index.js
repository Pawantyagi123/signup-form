const express = require("express")
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require("./models/employe.js")

const app = express()
app.use(express.json())
app.use(cors());
mongoose.connect('mongodb://127.0.0.1:27017/employe');

app.post('/login', (req,res) =>{
    const {email,password} = req.body
    EmployeeModel.findOne({email:email})
    .then(user =>{
        if(user){
            if(user.password === password){
                res.json("success")
            }else{
                res.json("The password is incorrect")
            }
        }else{
            res.json("User not found")
        }
    })
})
app.post('/register', async (req, res) => {
    try {
      const existingEmployee = await EmployeeModel.findOne({ email: req.body.email });
      if (existingEmployee) {
        // If the email already exists, send a response indicating that the email is already registered
        return res.status(400).json({ error: 'Email already registered' });
      }
      const newEmployee = await EmployeeModel.create(req.body);
      return res.json(newEmployee);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  
app.listen(3000,() =>{
    console.log("server is running")
})