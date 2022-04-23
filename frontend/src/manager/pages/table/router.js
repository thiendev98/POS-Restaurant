import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ManageTable from "./Manage"

function TableRoute() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/manage/table">
          <ManageTable />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default TableRoute;
