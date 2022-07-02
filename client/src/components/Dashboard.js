import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DashboardRow from './DashboardRow';

class Dashboard extends Component {
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
  tabRow(){
    if(this.state.courses instanceof Array)
   {
    return this.state.courses.map(function(object, i){
   	      return <DashboardRow object={object}/>
   	  })
   }
  }
render(){
 return (
  <div className='container'>
   <div className="row mt-5 mb-3">
      <div className="col-md-10"></div>
      <div className="col-md-2">
        <Link to="/add-course">Create course</Link>
      </div>
   </div>
   <div className="table-responsive">
    <table className="table" id='dashboard'>
     <thead>
      <tr>
        <th>Title</th>
        <th>Content</th>
        <th>MCQ</th>
        <th>Actions</th>
      </tr>
     </thead>
     <tbody>
       {this.tabRow()}
     </tbody>
    </table>
   </div>
  </div>
)
}
}
export default Dashboard;