import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CourseSingle extends Component {
render(){
  var object=this.props.object;
  return(
    <div className="col-md-12 col-lg-4 mb-5">
      <div className="courses">
        <figure>
          <img src={`${object.image}`}alt="course" className="img-fluid"/>   
        </figure>
        <div className="text">
          <h2 className="heading">{object.title}</h2>
            <div className="text-right">
              <form onSubmit={this.handleSubmit}>
               <Link className="btn btn-primary">Enroll</Link>
              </form>
            </div>
        </div>
      </div>
    </div>
    );
}
}
export default CourseSingle;