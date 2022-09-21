import React from "react";
import {usid} from "./Login";
import {useContext} from "react";
import idContext from "./context/Idcontext";

function ReacieveId(){
 const a=useContext(idContext);
console.log("accepted.....",a);
  return(
<>
<h1>Here data is..{a.name}</h1>
<h1>Here data is..{a.id}</h1>

</>
  )
    
}

export default ReacieveId;