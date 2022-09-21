import React from "react";

import APIservice from "../APIservice";
import{Link,useHistory,useParams,useLocation} from "react-router-dom";

function DeleteTask()
{
        const history=useHistory();
//     const location = useLocation()
//  const searchParams = new URLSearchParams(location.search);
//  const tid= searchParams.get("tid")
   
                const tid=useParams()                               
                console.log("task id received in task deletd componenet",tid);
    
   // const id=Number.parseInt(tid)
   
    APIservice.taskdeleteBytid(tid.tid).then((response)=>{           // here I have to access tid object property using  dot tid
        alert(response.data);
        history.push('/showalltask')
    }).catch((error)=>{console.log(error)})

    
return(
    <></>
)

}

export default DeleteTask;