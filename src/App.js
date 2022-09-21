

import {BrowserRouter, Switch, Route} from "react-router-dom";
import Login from "./component/Login";
import Adduser from './component/Adduser';
import AddTask from "./component/AddTask";
import ReacieveId from "./component/ReacieveId";
import ShowTask from "./component/ShowTask";
import DeleteTask from "./component/DeleteTask";
import { useState } from "react";
import Idstate from "./component/context/Idstate";
import ShowTaskById from "./component/ShowTaskById";
function App() {

  const[iid, setIid]=useState()

  const getdata=(diffid)=>{
    setIid(diffid);
  }

  return (
    <div>
    <div className="App">
      <Idstate>
      <BrowserRouter>
      <Switch>
<Route exact path="/" component={Login}></Route>
<Route path="/adduser" component={Adduser}></Route>
<Route exact path="/addTask" component={AddTask}></Route>
<Route path="/addtask/:id" component={AddTask}></Route>
<Route path="/reacieveId" component={ReacieveId}></Route>
<Route path="/showalltask" component={ShowTask}></Route>
<Route path="/deletetask/:tid" component={DeleteTask}></Route>
<Route path="/showtaskbyuser/:id" component={ShowTaskById}></Route>
      </Switch>
      </BrowserRouter>
      </Idstate>
     
    </div>
    </div>




  );
}

export default App;
