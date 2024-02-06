import React from "react";
import { Link } from "react-router-dom";
function Nav()
{
    return(
      <div className="row">
        <div className="col-md-7">
        </div>           
<div>


<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">React</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/vote">Vote</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/login">Login</Link>
        </li>
       

      </ul>
    </div>
  </div>
</nav>
</div>
</div>
    )
}
export default Nav;