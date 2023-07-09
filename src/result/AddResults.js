import axios from 'axios';
import React,{useState} from 'react'
import {Link, useNavigate} from "react-router-dom";
import "../css/style.css"
export default function AddResults() {
    let navigate = useNavigate()
    const[result,setResult]=useState({
        
        numberOfShots:"",
        maxScore:"",
        userScore:"",
        accuracy:"",
        gunType:""

    })
    
  
    const {numberOfShots,userScore,gunType}=result
    const onInputChange=(e)=>{
        setResult({...result,[e.target.name]:e.target.value})
    };
    const onSubmit =async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8086/score",result)
        navigate("/view/{User_id}")
    };
  return (
    <div className="container">
        <div className="row">
            <div className = "col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className = "text-center m-4">Add Score</h2>
                <form onSubmit={(e)=>onSubmit(e)}>
                <div className = "mb-3">
                    <label htmlFor="numberOfShots" className="form-label">
                        Number of shots
                    </label>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter your number of shots"
                    name="numberOfShots"
                    value={numberOfShots}
                    onChange={(e)=>onInputChange(e)} /> 
                </div>
                <div className = "mb-3">
                    <label htmlFor="userScore" className="form-label">
                        User Score
                    </label>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter your Score"
                    name="userScore"
                    value={userScore}
                    onChange={(e)=>onInputChange(e)}/> 
                </div><div className = "mb-3">
                    <label htmlFor="gunType" className="form-label">
                       Type of Gun
                    </label>
                    <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter your type of gun"
                    name="gunType"
                    value={gunType}
                    onChange={(e)=>onInputChange(e)}/> 
                </div>
                <button type ="submit" className="btn btn-outline-primary mx-2">Add Result</button>
                <Link className="btn btn-outline-danger mx-2" to="/">Cancel</Link>
                </form>
            </div>
        </div>
    </div>
  )
}