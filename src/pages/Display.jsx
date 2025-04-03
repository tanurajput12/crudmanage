import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const Display=()=>{
const [input,setInput]=useState([]);

const loadData=()=>{
    let api="http://localhost:3000/employeedetails";
    axios.get(api).then((res)=>{
        setInput(res.data);
    });
}
useEffect(()=>{
    loadData()
},[])

const ans=input.map((key)=>{
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
        </>
    )
}
export default Display;