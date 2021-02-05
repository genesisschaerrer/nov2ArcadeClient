import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom"

import AdminLogin from "./font-end/admin-login"

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <Switch>
            <Route path ="/login" component={AdminLogin} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
