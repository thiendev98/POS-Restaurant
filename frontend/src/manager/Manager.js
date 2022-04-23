import React, { useState } from "react";
import "./bootstrap/bootstrap.min.css"
import Sidebar from "./components/sidebar/Sidebar"
import Header from "./components/header/Header"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import ManageRoute from "./router";
import Login from "./Login";

const CheckAuth = () => {
  const [isAuth, setAuth] = useState(false)

  const signin = () => {
    setAuth(true)
  }

  return (
    <Router>
      <Switch>
        <Route path="/manage/login">
          {isAuth ? <Redirect to="/manage" /> : <Login signin={signin} />}
        </Route>
        <Route path="/manage">
          <Manage />
        </Route>
      </Switch>
    </Router>
  )
}

const Manage = () => {
  return (  
    <Router>
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1 m-0">
          <Header id="header"/>
          <div className="bg-light">
            <ManageRoute />
          </div>
        </div>
      </div>
    </Router>
  )
}

export default CheckAuth