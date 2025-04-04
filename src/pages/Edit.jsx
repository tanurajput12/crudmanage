import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Edit=()=>{
    const [input,setInput]=useState({});
    const {id}=useParams();

    const loadData=()=>{
        let api=`http://localhost:3000/employeedetails/${id}`;
        axios.get(api).then((res)=>{
            setInput(res.data);
            console.log(res.data);
        })
    }
    useEffect(()=>{
        loadData()
    },[])

    const hansleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values,[name]:value}));
        console.log(input);
    }

    const handleSubmit=()=>{
        let api=`http://localhost:3000/employeedetails/${id}`;
        axios.put(api, input).then((res)=>{
            alert("successfully");
        });
    }

    return(
        <>
        <h1>update your record:{id}</h1>

        Enter name:<input type="text" name="name" value={input.name} onChange={hansleInput}/>
       <br/>
       Enter status:<input type="text" name="status" value={input.status} onChange={hansleInput}/>
       <br/>
       Enter salary:<input type="number" name="salary" value={input.salary} onChange={hansleInput}/>
       <br/>
       Enter address:<input type="string" name="address" value={input.address} onChange={hansleInput}/>
       <br/>
       <button onClick={handleSubmit}>submit</button>
        </>
    )
}
export default Edit;