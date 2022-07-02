import React from 'react';
import {Link,withRouter} from "react-router-dom";

class Header extends React.Component{
render() {
return (
<header>
  <nav className="navbar navbar-expand-lg navbar-light bg-light ">
    <div className="container">
      <ul className="navbar-nav courses-lg">
        <li className="nav-item "><Link className="nav-link" to='/courses'>Courses</Link></li>
      </ul>
      <div className="brand">
        <Link to="/"><img src='images/logo.jpg' alt='logo'/></Link>
        <Link className="navbar-brand" to="/">IT course</Link>
      </div> 
      <button className="navbar-toggler" type="button" data-toggle="collapse" 
      data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false"
      aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse navbar-light" id="navbarsExample05">
        <ul className="navbar-nav courses-sm">
          <li className="nav-item "><Link className="nav-link"to="/courses">Courses</Link></li>
        </ul>
        <ul className="navbar-nav absolute-right">
          <li><Link to="/login" className="btn-login">Login</Link></li> 
          <span>&nbsp;</span>
          <li><Link to="/register" className="btn-register">Register</Link></li>
        </ul>
      </div>
    </div>
  </nav>
 </header>
)
}
}
export default withRouter(Header);