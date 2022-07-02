import React from 'react';
import {Link,withRouter} from "react-router-dom";
import axios from "axios"; 

class Login extends React.Component {
constructor(props){
  super(props);
  this.onSubmit = this.onSubmit.bind(this);
}
onSubmit(evt) {
  evt.preventDefault();
  const fd = new FormData();
  fd.append('name', this.refs.name.value);
  fd.append('password', this.refs.password.value);
  console.log(...fd);
  alert('Login with username : '+fd.get('name')+'\n'+
        'and password : '+fd.get('password'));
  let axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
      }
    };
  axios.post('api/login',fd,axiosConfig)
  .then(res=>{
    console.log("RESPONSE RECEIVED: ", res.data);
    alert('Logged in successfuly!');
    window.location.href='/dashboard';
    })
  .catch(error => {
    console.log("AXIOS ERROR: ", error);
    alert('Actually only login for teacher is available');
    alert('Sorry, we can\'t find this account !\n Please check your informations or create a new account.');
    
    });

}  
render(){
return (    
  <section className="site-section" id="login">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-7">
          <div className="form-wrap">
            <h2 className="mb-4">Log in with your account</h2>
            <form onSubmit={this.onSubmit}>
              <div className="row">
                <div className="col-md-12 form-group">
                  <label htmlFor="name">Username</label>
                  <input type="text" className="form-control py-2" ref="name" required />
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-md-12 form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control py-2" ref="password" required/>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 form-group">
                  <input type="submit" value="Login" className="btn btn-primary px-5 py-2" />
                </div>
                <div className="col-md-8 form-group">
                  <Link to="/register">Not a member yet? Sign up here</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
)
}
}
export default withRouter(Login);