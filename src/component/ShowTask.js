
import React, { useEffect, useState } from "react";
import APIservice from "../APIservice";
import {Link} from "react-router-dom";
import "../App.css";

function ShowTask(){

    const[task, setTask]= useState([])

    useEffect(()=>
    {  APIservice.gettask().then((response)=>{
        setTask(response.data);
        console.log("task is: ",response.data);
    }).catch((error)=>console.log(error));
   },[])

    return(
        <>
        <div>
      <div className="parent my-5 mx-3">
      
        <h2 className="text-center">All Task Details</h2>
        <Link to = "/addtask" className = "btn btn-success mb-2" > Add Task </Link>
    <table className="table table-striped table-dark my-4">
  <thead>
    <tr>
      <th>TaskID</th>
      <th>Task Title</th>
      <th>Task status</th>
      <th>Task sheduledate</th>
      <th>Task updatedDate</th>
      <th>Userid</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
     {
        task.map((e)=>{
            return(
            <tr key={e.tid}>
            <td>{e.tid}</td>
           <td>{e.title}</td>
           <td>{e.status}</td>
           <td>{e.sheduledate}</td>
           <td>{e.updatedDate}</td>
           <td>{e.userid.id}</td>

          

           <Link className="btn btn-success mx-3" to={`deletetask/${e.tid}`} >Delete</Link>
            <Link className="btn btn-warning" to={`update-contact/${e.id}`} >Update</Link>
           {/* <button className = "btn btn-success" onClick = {() => deletenumber(e.id)}
                                    > Delete</button> */}

           
                
          </tr>)
        })
      
      }

  </tbody>
</table>

    </div>
</div>


        </>
    )
}

export default ShowTask;