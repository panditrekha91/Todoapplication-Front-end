import React, { useEffect, useState } from "react";
import APIservice from "../APIservice";
import {Link,useParams} from "react-router-dom";
import {useContext} from "react";
import idContext from "./context/Idcontext";

function AddTask()
{
    const a=useContext(idContext)
    const[title, settitle]=useState();
    const[status,setstatus]=useState();
    const[sheduledate,setsheduledate]=useState();
    const[updatedDate, setupdatedDate]=useState();
    //const[uid,setUid]=useState();
   
   const c=useParams();
   // console.log(c);
    let id=c.id
console.log("accpeted ",id);
    
   
    const taskadd =(e)=>{
        e.preventDefault();
      // let userid= {id:uid}       // here i have to use userid field name which show in swagger and inside that propery name which is id then value pass
       let userid= {id:id}
       //console.log("id recieved or not ....",userid);
        const taskdata={userid,title,status,sheduledate,updatedDate}
        console.log(taskdata);
        APIservice.addtaskindb(taskdata).then((response)=>{
            alert(response.data);
            console.log(response.data);
        }).catch(error=>{console.log(error)})

        
    }

    return(

        <div>
            <div className="maindiv"> 
            <div className="container">
            <div className="child">
            <h2 className="text-center">Add Tasks</h2>
           
            <form>
  <div className="form-group row"> 
    <label htmlFor="exampleInputEmail1">Task Title</label>
    <input type="text" className="form-control" id="exampleInputEmail1" name="title" value={title} onChange={(e)=>{settitle(e.target.value)}}/>
  </div>
  
  <div className="form-group row">
    <label htmlFor="exampleInputEmail2">Task Status</label>
    <input type="text" className="form-control" id="exampleInputEmail2" name="status" value={status} onChange={(e)=>{setstatus(e.target.value)}}/>
  </div>

  <div className="form-group row">
    <label htmlFor="exampleInputEmail3">Task shedule date</label>
    <input type="date" className="form-control" id="exampleInputEmail3" name="sheduledate" value={sheduledate} onChange={(e)=>{setsheduledate(e.target.value)}}/>
  </div>

  <div className="form-group row">
    <label htmlFor="exampleInputEmail3"> Task update Date</label>
    <input type="date" className="form-control" id="exampleInputEmail3" name="updatedDate" value={updatedDate} onChange={(e)=>{setupdatedDate(e.target.value)}}/>
  </div>

  {/* <div className="form-group row">
    <label htmlFor="exampleInputEmail3">User id</label>
    <input type="number" className="form-control" id="exampleInputEmail3" name="uid" value={uid} onChange={(e)=>{setUid(parseInt(e.target.value))}}/>
  </div>  */}

  <button type="submit" className="btn btn-primary" onClick={(e)=>{taskadd(e)}}>Submit</button>
</form>
 {/* <h1>this is from {a.id}</h1> */}
<div className="Addtaskpage"><Link to="/showalltask"> Show All task</Link></div>


              </div>
            </div>
        </div>   
        </div>
    )
}
export default AddTask;

