import React, {Component} from 'react';
import axios from 'axios';

class CreateCourse extends Component {
  constructor(props){
    super(props);
    this.state = {courseTitle: ''};
    this.handleChange1 = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = e => {
    this.setState({
      courseTitle: e.target.value
    })
  }
  handleSubmit(e){
    e.preventDefault();
    const fd = new FormData();
    fd.append('title',this.state.courseTitle);
    console.log(...fd);
    alert('Course Title : '+fd.get('title'));

    let axiosConfig = {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
      }
    };
     axios.post('api/courses',fd,axiosConfig)
     .then(res=>{
      console.log("RESPONSE RECEIVED: ", res);
      alert('Course added Succefully!');
     // window.location.href='/dashboard';
    })
     .catch(error => {
      console.log("AXIOS ERROR: ", error);
      alert('Course addition has failed !');
  });
  }
render() {
 return (
  <div className='container'>
        <h1>Create course</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>course Title:</label>
                <input type="text" className="form-control" onChange={this.handleChange} />
              </div>
            </div>
          </div>

           <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>course File:</label>
                <input type="file" className="form-control" onChange={this.handleChange} />
              </div>
            </div>
          </div>
           <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label>course Image:</label>
                <input type="file" className="form-control" onChange={this.handleChange} />
              </div>
            </div>
          </div>
           
          <div className="form-group">
            <input type="submit" className="btn btn-primary" value="Add course"/>
          </div>
        </form>
  </div>
)
}
}
export default CreateCourse;