import axios from "axios";
import { useState } from "react";
const Search=()=>{
    const [name,setName]=useState("");
    const [data,setData]=useState([]);
    const [Errmsg,setErrmsg,]=useState("");
    

    const handleSubmit=()=>{
        let api=`http://localhost:3000/employeedetails/?name=${name}`;
        axios.get(api).then((res)=>{
            setData(res.data);
            if(res.data.length<=0)
            {
                alert("no record found");
                setErrmsg("No record found");
            }
            else{
                setErrmsg=("");
            }
        })
    }
    const ans=data.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.name}</td>
                <td>{key.status}</td>
                <td>{key.salary}</td>
                <td>{key.address}</td>
            </tr>
            </>
        )
    })

    return(

        <>
        <div>
<h1> Search Data by Name</h1>
Enter name:<input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
<br/>
<button onClick={handleSubmit}>Search</button>
<table>
    <thead>
        <tr>
            <th>name</th>
            <th>status</th>
            <th>salary</th>
            <th>address</th>

        </tr>
    </thead>
    <tbody>
        {ans}
    </tbody>
</table>
        </div>
        </>
    )
}
export default Search;