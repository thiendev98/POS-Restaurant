import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReserveForm from './Reserve_Form';
import Menu from './Reserve_Table';
function ReserveRoute() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/reservation/new">
          <ReserveForm />
        </Route>
        <Route path="/reservation">
          <Menu />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default ReserveRoute;
