import React from "react";

import idContext from "./Idcontext";

const Idstate=(props)=>{

    const sta={
        name:"Rekha",
        id:50

    }


    return(
<idContext.Provider value={sta}>

    {props.children}
</idContext.Provider>
    )
}
export default Idstate;