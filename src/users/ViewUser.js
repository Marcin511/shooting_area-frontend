import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { Link ,useParams} from 'react-router-dom'

export default function ViewUser() {
    const [user,results,setUser,setResults] = useState(
        {
            name:"",
            email:"",
        }
    );
    const {Id} = useParams()
    useEffect(()=>{
      loadResult();
  },[]);
    const loadResult = async () => {
        const result = await axios.get(`http://localhost:8086/result/${Id}`)
        setResults(result.data);
    };
    const {id} = useParams();
    useEffect(()=>{ 
        loadUser();

    }, []);
    
    const loadUser = async ()=> {
        const result = await axios.get(`http://localhost:8086/view/${id}`)
        setUser(result.data)
    };

  return (
    <div className='guns-picture'>
    <div className="container">
    <div className="row">
        <div className = "col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className = "text-center m-4">User Details</h2>
            <div className="card">
                <div className='card-header'>
                    Details of user id : {user.id}
                    <ul className="list-group list-group-plush">
                        <li className="list-group-item">
                            <b>Name: </b>
                            {user.name}
                            
                        </li>
                        <li className="list-group-item">
                            <b>Email: </b>
                            {user.email}
                            
                        </li>
                
                    </ul>
                </div>
                
            </div>
        
            <Link className="btn btn-primary my-2" to={"/score"}>add result</Link>
            <Link className="btn btn-outline-primary" to={"/"}>Back</Link>
            <Link className="btn btn-primary my-2" to={`/result/${id}`}>show result</Link>
            <Link className="btn btn-primary my-2" to={"/showall"}>AllResults</Link>
            </div>
            </div>
            </div>
            </div>
  );
}
