import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom"

import AdminLogin from "./auth/admin-login"

import Homepage from "./pages/homepage"

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <BrowserRouter>
       
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path ="/login" component={AdminLogin} />
            
          </Switch>
        </BrowserRouter>

       

      </div>
    );
  }
}
