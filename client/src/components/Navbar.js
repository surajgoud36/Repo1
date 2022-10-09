import React from 'react'
import logo from '../images/hi.png';
function Navbar() {
  return (
    <div>
        <nav class="navbar text-light bg-light">
  <div class="container-fluid text-light">
    <a class="navbar-brand" href="/">
      <img src={logo} alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/>
      Suraj
    </a>
    <ul class="nav justify-content-center">
    <li class="nav-item">
      <a class="nav-link" href="/Add">Addition</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/News">News</a>
    </li>
    
    
  </ul>
  </div>
</nav>
    </div>
  )
}

export default Navbar