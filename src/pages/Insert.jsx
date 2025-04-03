import axios from "axios";
import {  useState } from "react";
const Insert=()=>{
   
    const [input,setInput]=useState({});

    const hansleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values,[name]:value}));
    }

    const handleSubmit=()=>{
        let api="http://localhost:3000/employeedetails";
        axios.post(api, input).then((res)=>{
            alert("successfully");
        });
    }
    return(
        <>
        <div>
        <form>
       Enter name:<input type="text" name="name" value={input.name} onChange={hansleInput}/>
       <br/>
       Enter status:<input type="text" name="status" value={input.status} onChange={hansleInput}/>
       <br/>
       Enter salary:<input type="number" name="salary" value={input.salary} onChange={hansleInput}/>
       <br/>
       Enter address:<input type="string" name="address" value={input.address} onChange={hansleInput}/>
       <br/>
       <button onClick={handleSubmit}>submit</button>

        </form>
        </div>
        </>
    )
}
export default Insert;