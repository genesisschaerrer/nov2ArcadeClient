import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom"

import AdminLogin from "./font-end/admin-login"
import AdminDashboard from "./font-end/admin-dashboard"

import Homepage from "./frontend/homepage"

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <BrowserRouter>
       
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path ="/login" component={AdminLogin} />
            <Route path="/admindashboard" component={AdminDashboard} />
            
          </Switch>
        </BrowserRouter>

       

      </div>
    );
  }
}
