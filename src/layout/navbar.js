import React from "react";
import { Link } from "react-router-dom";
import "../css/style.css"
export default function navbar() {
  return (
    <div>
<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">
        Shooting Competition
        </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <Link className="btn btn-outline-light"to="/login">Login</Link>
    <Link className="btn btn-outline-light" to="/">Logout</Link>
   <Link className="btn btn-outline-light" to="/register">Register</Link>
   
  </div>
</nav>
    </div>
  )
}
