import './App.css';
import React from 'react';
import Customer from './customer/Customer';
import Manage from './manager/Manager';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/manage">
          <Manage />
        </Route>
        <Route path="/">
          <Customer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
