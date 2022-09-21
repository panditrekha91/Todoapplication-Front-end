
import React from "react";
import {useState,createContext} from "react";
import APIservice from "../APIservice";
import {Link,useHistory} from "react-router-dom";
import "../App.css";
import AddTask from "./AddTask";
import idContext from "./context/Idcontext";


  
function Login()    
{
    
    const[id, setid]=useState();
    const[password, setpassword]=useState();
    const[uid, setUid]= useState();
    const[welcome, setWelcome]=useState();


    const history=useHistory();
    
    
    const loginfun=(e)=>{
        e.preventDefault();
        const info={id,password};
        
        //console.log(info);

        APIservice.loginuser(id,password).then((response)=>{
           // console.log({uid});
            const userid = response.data
           

            if(userid>0)
            {
                //alert("welcome user....To add task click on add button")
                setUid(response.data);
               setWelcome("welcome....click here to add task")
            //history.push('/addtask');
    
            }
            else{
                alert("Please Enter correct credintial...")
                history.push('/');
            }
        }).catch(error=>{console.log(error)})
    }

   
    return(

        <div>           
            <div className="child">
           <h3> <Link to={`addtask/${uid}`}>{uid}{welcome}</Link></h3>
            <h2 className="text-center">Login Here</h2>
            <form>
  
  <div className="form-group row">
    <label htmlFor="exampleInputEmail2">Enter User ID </label>
    <input type="text" className="form-control" id="exampleInputEmail2" name="id" value={id} onChange={(e)=>{setid(e.target.value)}}/>
  </div>

  <div className="form-group row">
    <label htmlFor="exampleInputEmail3">Password</label>
    <input type="password" className="form-control" id="exampleInputEmail3" name="password" value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
  </div>
        
  <button type="submit"className="btn btn-primary" onClick={(e)=>{loginfun(e)} }>Submit</button>
 
 <div className="Loginpage" ><Link to="/adduser">Sign-up</Link></div>

</form>

{/* <Link to={`addtask/${uid}`} button type="submit" onClick={(e)=>{loginfun(e)} } className="btn btn-success mx-3"  >Submit</Link> */}

            </div>

           
        </div>
    )
}

export default Login;

