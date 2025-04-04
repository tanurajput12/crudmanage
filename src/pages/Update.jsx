import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Update=()=>{
    const [mydata,setMydata]=useState([]);
    const navigate=useNavigate();

    const loadData=()=>{
        let api="http://localhost:3000/employeedetails";
        axios.get(api).then((res)=>{
            setMydata(res.data);
        });
    }

useEffect(()=>{
    loadData();
},[]);

const myDel=(id)=>{
    let api=`http://localhost:3000/employeedetails/${id}`;
    axios.delete(api).then((res)=>{
        alert("recodrd successfulyy deleted");
        loadData();
    })
}

const myEdit=(id)=>{
    navigate(`/edit/${id}`);
}
const ans=mydata.map((key)=>{
    return(
        <>
        <tr>
                <td>{key.name}</td>
                <td>{key.status}</td>
                <td>{key.salary}</td>
                <td>{key.address}</td>
                <td>

                    <a href="#" onClick={()=>{myDel(key.id)}}>
                    <img src="del.jpg"/>
                    </a>
                </td>

                <td>

                    <a href="#" onClick={()=>{myEdit(key.id)}}>
<img src="edit.jpg"/>
                    </a>
                </td>
            </tr>
        </>
    )
})
    return(
        <>
        <div>
            <h1> updatation</h1>
            <table>
    <thead>
        <tr>
            <th>name</th>
            <th>status</th>
            <th>salary</th>
            <th>address</th>
            <th></th>
            <th></th>

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
export default Update;