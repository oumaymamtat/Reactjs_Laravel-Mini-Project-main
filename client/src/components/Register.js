import React from 'react';
import axios from "axios"; 
import $ from 'jquery'; 

class Register extends React.Component {
constructor(props){
  super(props);
  this.state={
    position:'',
  specialty:'',
  branch:'',
  level:'',
};
  this.onSubmit = this.onSubmit.bind(this);
}
showTeacher(){
  console.log('showTeacher');
$("#hidden_teacher").removeClass("none");
$("#hidden_teacher").addClass("showDIV");

$("#hidden_student").removeClass("showDIV");
$("#hidden_student").addClass("none");
}
showStudent(){
  console.log('showStudent');

$("#hidden_student").removeClass("none");
$("#hidden_student").addClass("showDIV");

$("#hidden_teacher").removeClass("showDIV");
$("#hidden_teacher").addClass("none");
}
handleOptionChange = e => {
  this.setState({
    position: e.target.value,
  });
}
specialtyChange = e =>{
  this.setState({
    specialty: e.target.value,
  });
}
branchChange = e =>{
  this.setState({
    branch: e.target.value,
  });
}
levelChange = e =>{
  this.setState({
    level: e.target.value,
  });
}
onSubmit(evt) {
  console.log('clicked');
  evt.preventDefault();
  const fd = new FormData();
  fd.append('name', this.refs.name.value);
  fd.append('email', this.refs.email.value);
  fd.append('password', this.refs.password.value);
 // fd.append('position',this.state.position);
/*  fd.append('specialty',this.state.specialty);
  fd.append('branch',this.state.branch);
  fd.append('level',this.state.level);*/
  console.log(...fd);
  //if (fd.get('position') == 'teacher')
  alert(
    //'You register as :'+fd.get('position') +'\n'+
        'with username : '+fd.get('name')+'\n'+
        'email : '+fd.get('email')+'\n'+
        'password : '+fd.get('password')
     //   'and specialty :'+fd.get('specialty')
    );
/*if (fd.get('position') == 'student')
  alert('You register as :'+fd.get('position') +'\n'+
        'with username : '+fd.get('name')+'\n'+
        'email : '+fd.get('email')+'\n'+
        'password : '+fd.get('password')+'\n'+
        'branch :'+fd.get('branch')+'\n'+
        'and level :'+fd.get('level')
    );*/
  let axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
      }
    };
  axios.post('api/register',fd,axiosConfig)
  .then(res=>{
    console.log("RESPONSE RECEIVED: ", res);
    alert('Congrats !\n Welcome in our platform.\n Now you can login and enjoy our great courses.');
    window.location.href='/login';
    })
  .catch(error => {
    console.log("AXIOS ERROR: ", error);
    alert('Sorry, Email already used ! \n Please enter another one.');
     });

}      
render(){
return (
<section className="site-section" id="register">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-7">
          <div className="form-wrap">
            <h2 className="mb-5">Register new account</h2>
            <form onSubmit={this.onSubmit}>
             <div className="row">
                <div className="col-md-12 form-group">
                  <label>Username</label>
                  <input type="text" className="form-control py-2" ref="name" required/>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 form-group">
                  <label>Email</label>
                  <input type="email" className="form-control py-2" ref="email" required/>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 form-group">
                  <label>Password</label>
                  <input type="password" className="form-control py-2" ref="password" required />
                </div>
              </div>

              {/*(<div className="row">
                <div className="col-md-12 form-group">
                 <label>You are :</label> 
                    <div className="row">

                      <div className="col-lg-6">
                        <div className="form-check-inline">
                         <label className="form-check-label" htmlFor="radio1">
                          <input type="radio" className="form-check-input" 
                           id="teacher" name="position" value="teacher"
                           checked={this.state.position=== "teacher" && this.showTeacher()}
                           onChange={this.handleOptionChange}
                          />Teacher
                         </label>
                         </div>
                         <div className="row none" id='hidden_teacher'>
                          <div className="col-md-12 form-group">
                           <label>Specialty</label>
                           <input type="text" className="form-control py-2" 
                            ref={this.state.specialty} onChange={this.specialtyChange}/>
                          </div>
                        </div>
                        </div>

                      <div className="col-lg-6">

                        <div className="form-check-inline">
                         <label className="form-check-label" htmlFor="radio2">
                          <input type="radio" className="form-check-input"
                            id="student" name="position" value="student"
                            checked={this.state.position=== "student" && this.showStudent()}
                            onChange={this.handleOptionChange}
                           />Student
                         </label>
                         </div>
                         
                           <div className="row none" id='hidden_student'>
                            <div className="col-md-8 form-group">
                             <label>Branch</label>
                             <input type="text" className="form-control py-2" 
                              ref={this.state.branch} onChange={this.branchChange}/>
                            </div>
                           <div className="col-md-4 form-group">
                            <label>Level</label>
                            <input type="text" className="form-control py-2"
                             ref={this.state.level} onChange={this.levelChange} />
                          </div>
                        </div>

                     </div>

                    </div>
                </div>
              </div>)*/}

              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="submit" value="Register" className="btn btn-primary px-5 py-2" />
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
export default Register;