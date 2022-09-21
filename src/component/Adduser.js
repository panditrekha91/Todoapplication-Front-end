
import "../App.css";
import React, { useState, useEffect } from "react";
import APIservice from "../APIservice";

function Adduser(){
const[name, setname]=useState();
const[email, setemail]=useState();
const[password, setpassword]= useState();


 
const useradd=(e)=>{
e.preventDefault();

let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if((name.length>3)&&(email.match(mailformat))&&(password.length>=8))
{
  const uinfo={name,email,password};
   console.log(uinfo);
APIservice.adduser(uinfo).then((response)=>{
    //console.log(response.data);
    alert(response.data);

}).catch(error=>{console.log(error)});

}
else{
  alert("Enter Valid details");
}

}


    return(

        <div>
            <div className="container">
            <div className="child">
            <h2 className="text-center">Add User</h2>
            <form>
  <div className="form-group row">
   
    <label htmlFor="exampleInputEmail1">Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" name="name" value={name} onChange={(e)=>{setname(e.target.value)}}/>
  </div>
  
  <div className="form-group row">
    <label htmlFor="exampleInputEmail2">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail2" name="email" value={email} onChange={(e)=>{setemail(e.target.value)}}/>
  </div>

  <div className="form-group row">
    <label htmlFor="exampleInputEmail3">Password</label>
    <input type="password" className="form-control" id="exampleInputEmail3" name="password" value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
  </div>

  
        
  <button type="submit" className="btn btn-primary" onClick={(e)=>{useradd(e)}}>Submit</button>

 
  
  
</form>


            </div>


            </div>


        </div>
    )
}

export default Adduser;