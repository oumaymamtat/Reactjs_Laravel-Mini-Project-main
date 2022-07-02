import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class DashboardRow extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
   /* let uri =`/api/courses/${object.id}`;
    axios.delete(uri);
    browserHistory.push('');*/
 }
 render(){
  var object=this.props.object;
  return(
    <tr>
     <td>{object.title}</td>
     <td>
      <Link to={object.file}>Get the course</Link>
     </td>
     <td>
      <Link
      // to={object.mcq}
      >View the MCQ</Link>
     </td>
      <td>
       <form onSubmit={this.handleSubmit}>
        <Link 
        // to=edit+object.id 
        className="btn btn-primary">Edit</Link>
          <span>&nbsp;</span>
        <input type="submit" value="Delete" 
         className="btn btn-danger"/>
       </form>
      </td>
   </tr>
    );
}
}
export default DashboardRow;