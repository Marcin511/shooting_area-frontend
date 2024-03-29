import axios from "axios"
import React,{useEffect, useState} from 'react'
import {  Link, useParams } from 'react-router-dom';
import "../css/style.css"

export default function ViewResults() {
    
    const [results, setResults] = useState(
      { 
        numberOfShots:"",
        maxScore:"",
        userScore:"",
        accuracy:"",
        gunType:""
      }
    );
   
    
    const {userId} = useParams()
    useEffect(()=>{
      loadResult();
  },[]);
    const loadResult = async () => {
        const result = await axios.get(`http://localhost:8086/result/${userId}`)
        setResults(result.data);
    };

  return (
    <div className='guns-picture'>
      <div className='container'>
        <div className='py-4'>
            <table className="table border shadow">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Number of Shots</th>
                  <th scope="col">Max score</th>
                  <th scope="col">User Score</th>
                  <th scope="col">Accuracy "%"</th>
                  <th scope="col">Type of gun</th>
                </tr>
            </thead>
          <tbody>
            {results.map((result,index) => ( 
              <tr>
                <th scope="row"key={index}>{index+1}</th>
                  <td>{result.numberOfShots}</td>
                  <td>{result.maxScore}</td>
                  <td>{result.userScore}</td>
                  <td>{result.accuracy}</td>
                  <td>{result.gunType}</td>
                </tr>
              ))}
             </tbody>
            </table> 
            <Link className="btn btn-primary mx-2" to="/view{userId}">Back</Link>
        </div>
      </div>
    </div>
  );
}
