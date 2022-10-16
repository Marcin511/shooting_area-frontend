import axios from "axios"
import React,{useEffect, useState} from 'react'
import {  Link, useParams } from 'react-router-dom';
import "../css/style.css"

export default function AllResults() {
    
    const [results, setResults] = useState([]);
    
    const {id} = useParams()
    useEffect(()=>{
      loadResult();
  },[]);
    const loadResult = async () => {
        const result = await axios.get(`http://localhost:8086/showall`)
        setResults(result.data);
    };

  return (
    <div className="background movie">
      <div className='container'>
        <div className='py-4'>
            <table className="table border shadow">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Number of Shots</th>
                  <th scope="col">Max score</th>
                  <th scope="col">User Score</th>
                  <th scope="col">Accuracy</th>
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
                  <td>{result.accuracy} % </td>
                  <td>{result.gunType}</td>
                </tr>
              ))}
             </tbody>
            </table> 
            <Link className="btn btn-primary mx-2" to="/">Back</Link>
        </div>
      </div>
    </div>
  );
}
