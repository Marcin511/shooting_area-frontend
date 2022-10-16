
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/navbar';
import Home from './pages/Home';

import Score from './pages/Score';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AddUser from './users/AddUser';
import EditUser from './users/EditUsers';
import ViewUser from "./users/ViewUser";
import AddResults from './result/AddResults';
import Login from './users/Login';
import AllResults from './result/AllResults';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
    
        <Route exact path="/login" element = {<Login/>}/>
        <Route exact path="/showall" element = {<AllResults/>}/>
        <Route exact path="/" element = {<Home/>}/>
        <Route exact path="/result/:id/results" element = {<Score/>}/>
        <Route exact path="/register" element={<AddUser/>}/>
        <Route exact path="/edituser/:id" element = {<EditUser/>}/>
        <Route exact path="/view/:id" element={<ViewUser />} />
        <Route exact path="/score" element={<AddResults/>}/>
      </Routes>
      </Router>
     
    </div>
  );
}


export default App;
