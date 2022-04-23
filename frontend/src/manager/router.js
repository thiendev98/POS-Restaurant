import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Dashboard from "./pages/dashboard/Dashboard"
import Order from "./pages/order/Order"
import Analytic from "./pages/analytic/Analytic"
import TableRoute from "./pages/table/router"
import Menu from "./pages/menu/Menu";
import EManager from "./pages/emp_manager/EmployeeManager";
const ManageRoute = () => {
  return (
    <Switch>
      <Route path="/manage/dashboard">
        <Dashboard />
      </Route>
      <Route path="/manage/order">
        <Order />
      </Route>
      <Route path="/manage/analytic">
        <Analytic />
      </Route>
      <Route path="/manage/table">
        <TableRoute />
      </Route>
      <Route path="/manage/employee">
        <EManager />
      </Route>
      <Route path="/manage/menu">
        <Menu />
      </Route>
      <Redirect from="/manage" to="/manage/dashboard" />
    </Switch>
  )
}

export default ManageRoute