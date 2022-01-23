const express = require("express");
const app=express();
const mysql=require("mysql")

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password:"password",
    database:"employeesystem",

});

app.post("/create",(req, res) => {

   const Empcode = req.body.Empcode;
   const Name = req.body.Name;
   const Department = req.body.Department;
   const Gender = req.body.Gender;
   const DOB = req.body.DOB;
   const Joining = req.body.Joining;
   const PrevExperience = req.body.PrevExperience;
   const Salary = req.body.Salary;
   const Address = req.body.Address;

   db.query("INSERT INTO employees (Empcode, Name, Department, Gender, DOB, Joining, PrevExperience, Salary, Address) VALUES(?,?,?,?,?,?,?,?,?)",
   [Empcode, Name, Department, Gender, DOB, Joining, PrevExperience, Salary, Address],
   (err, result) => {
       if(err){
           console.log(err);
       } else {
           res.send("Values Inserted");
       }
   }
   );
   
});

app.listen(3007, () => {
    console.log("your server is running");
});