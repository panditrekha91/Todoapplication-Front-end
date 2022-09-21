import axios from "axios";

class APIservice{

    adduser(user)
    {
        return axios.post("http://localhost:9001/adduser",user);
    }

    loginuser(id,password)
    {
       //console.log(id,password);
        return axios.post("http://localhost:9001/login/" +id+ "/" +password)
    }

    addtaskindb(taskdata)
    {
       // console.log("its recievd API ",taskdata);
        return axios.post("http://localhost:9001/addtask",taskdata);
    }

    gettask()
    {
        return axios.get("http://localhost:9001/gettask")
    }

    gettaskByuserId(id)
    {
        return axios.get("http://localhost:9001/getbyuserid/"+ id);
    }

    taskdeleteBytid(tid)
    {
        console.log(tid);
        return axios.delete("http://localhost:9001/byid/"+ tid)
    }
}

export default new APIservice();