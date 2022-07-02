import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CourseSingle from './CourseSingle';

class Courses extends Component {
  constructor(props) {
       super(props);
       this.state = {courses: ''};
  }
  componentDidMount(){
    axios.get('/api/courses')
    .then(response => {
      console.log('success',response);
      this.setState({ courses: response.data });
     })
    .catch(function (error) {
      console.log('axios error',error);
     })
  }
  gridCol(){
    if(this.state.courses instanceof Array)
   {
    return this.state.courses.map(function(object, i){
      return  <CourseSingle object={object}/>
   })
 }
}
render(){
 return (
  <div className='container'>
   <h2>All Courses </h2>
   <br/>
     <div className="row">
       {this.gridCol()}
     </div>
  </div>
)
}
}
export default Courses;