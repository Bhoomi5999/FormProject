

import './App.css';
import Axios from "axios";

import { useState } from "react";

function App() {
  const [Empcode, setEmpCode]=useState("");
  const [Name, setName]=useState("");
  const [Department, setDepartment]=useState("");
  const [Gender, setGender]=useState("");
  const [DOB, setDOB]=useState("0");
  const [JoiningDate, setJoiningDate]=useState("0");
  const [PrevExperience, setPrevExperience]=useState("");
  const [Salary, setSalary]=useState("0");
  const [Address, setAddress]=useState("");

  const addEmployee = () => {
    Axios.post("http://localhost:3007/create", {
      Empcode: Empcode,
      Name: Name,
      Department: Department,
      Gender: Gender,
      DOB: DOB,
      JoiningDate: JoiningDate,
      PrevExperience: PrevExperience,
      Salary: Salary,
      Address: Address
    }).then(() => {
      console.log("success");
  
    });
    };
    
  
  const displayInfo = () => {
    console.log(Empcode+Name+Department+Gender+DOB+JoiningDate+PrevExperience+Salary+Address);
  }

  return (
    <html>
      <head>
      <link rel="stylesheet" href= "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"></link>
      </head>
    
      <form>
    <div class="container">
    <div class="row">
    <div class="col-25">
      <div class="col-27">
        <label for="empcode">Empcode:</label>
        </div>
        </div>
        <div classs="col-75">
       <input type="text" class="form-control" id="Empcode" placeholder="Enter Employee code" name="EmpCode" size="64" />
      </div>
      </div>
      <div class="row">
      <div class="col-25">
        <label for="Name">Name:</label>
        </div>
        <div class="col-75">
        <input type="text" class="form-control" id="Name" placeholder="Enter Name" name="Name" size="70"/>
        </div>
      </div>
      <div class="row">
      <div class="col-25">
        <label for="department" size="24">Department:</label>
        </div>
        <div class="col-75">
        <select  class="form-control" width="24">
            <option value="actual value 1">Admin</option>
            <option value="actual value 2">Technology</option>
              <option value="actual value 3">Accounts</option>  
         </select >   
         </div>     
      </div>
      <div class="row">  
      <div class="col-25">      
        <label for="gender">Gender:</label>
        </div>
        <div class="col-75">
          <label class="radioo" />
        <input type="radio" value="Male" class="form-check-input"/><label class="form-check-label">Male</label>
        <input type="radio" value="Female" class="form-check-input"/><label class="form-check-label">Female</label>
       </div>
      </div>
      <div class="row">
      <div class="col-25">
        <label for="DOB">DOB:</label>
        </div>
        <div class="col-75">
        <input type="date" class="form-control" size="24"/>
        </div>
      </div>
      <div class="row">
      <div class="col-25">
        <label for="Joining date">Joining Date:</label>
        </div>
        <div class="col-75">
        <input type="date" class="form-control"/>
      </div>
      </div>
      <div class="row">
      <div class="col-25">
        <label for="prev Experiance">Prev Experience:</label>
        </div>
        <div class="col-75">
        <input type="text" class="form-control"/>
        </div>
      </div>     
      <div class="row">
      <div class="col-25">
        <label for="salary" >Salary:</label>
        </div>
        <div class="col-75">
        <input type="text" className="form-control clssalary"/>
        </div>
      </div>
      <div class="row">
      <div class="col-25">
        <label for="Address">Address:</label>
        </div>
        <div class="col-75">
        <textarea className="form-control" rows="3"></textarea> 
        </div>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
      <button type="button" className="btn btn-primary">Cancle</button>
    </div>
    </form>
    </html>
    
   
   


  );

     
}




export default App;
