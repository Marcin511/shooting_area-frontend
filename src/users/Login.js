import axios from 'axios';
import React,{useState} from 'react'
import {Link, useNavigate} from "react-router-dom";

export default function Login() {
    let navigate = useNavigate()
    const[user,setUser]=useState({
        name:"",
        password:""
    })
    const {name,password}=user
    const onInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    };
    const onSubmit =async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8086/login",user)
        navigate("/")
    };
  return (
    <div className='guns-picture'>
    <div className="container">
        <div className="row">
            <div className = "col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className = "text-center m-4">Login</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className = "mb-3">
                    <label htmlFor="Name" className="form-label">
                        Name
                    </label>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter your name"
                    name="name"
                    value={name}
                    onChange={(e)=>onInputChange(e)} /> 
                </div>
               <div className = "mb-3">
                    <label htmlFor="Password" className="form-label">
                       Password
                    </label>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter your password"
                    name="password"
                    value={password}
                    onChange={(e)=>onInputChange(e)}/> 
                </div>
                
                <Link className="btn btn-outline-primary"to={`/view/{id}`}>Login</Link>
                <Link className="btn btn-outline-danger mx-2" to="/">Cancel</Link>
                </form>
            </div>
        </div>
    </div>
    </div>
  )
}
