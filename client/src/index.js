import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Courses from './components/Courses';
import CreateCourse from './components/CreateCourse';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

const routing = (
 <Router>
  <div>
   <Header/>
    <Switch>
     <Route path="/add-course" component={CreateCourse} />
     <Route  path='/courses' component={Courses}/>
     <Route  path='/dashboard' component={Dashboard}/>
     <Route  path='/login' component={Login}/>
     <Route  path='/register' component={Register}/>
     <Route  exact path='/' component={Home}/>
    </Switch>
   <Footer/>   
  </div>
 </Router>
 );
ReactDOM.render(routing, document.getElementById("root"));