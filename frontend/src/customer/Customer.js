import {Foods} from './Foods';
import {Drinks} from './Drinks';
import Cart from './Cart';
import ReserveRoute from './component/router';
import {BrowserRouter, Route, Switch, NavLink, Redirect} from 'react-router-dom';
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon } from 'mdbreact';
import Footer from './Footer';
import React from 'react';
import { MasterForm } from "./Payment";
import '../customer/css/styles.css'

const restaurantName = "Le restaurant";
const bgColor = {backgroundColor: "var(--bs-yellow)"}
const Customer = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path = "/payment" component = {MasterForm}/>
        <Route path="/">
          <body style={{
            height: '100%',
            background: 'var(--bs-gray-dark)',
            minHeight: '100vh',
            width: '100%'
          }}> 
            <div className="App container">
                
            <MDBNavbar style={bgColor} dark expand="md" scrolling fixed="top">
            <span style={{display:'inline-block', width: '2cm'}}></span>
            <h1 class="restaurant-name">{restaurantName}</h1>
            <span style={{display:'inline-block', width: '2cm'}}></span>
                <ul className = "navbar-nav">
                <li className = "nav-item- m-1">
                  
                  <NavLink className = "nav-btn" to = "/foods">
                      Đồ ăn
                    </NavLink>
                    </li>
                  <li className = "nav-item- m-1">
                    <NavLink className = "nav-btn" to = "/drinks">
                      Đồ uống
                    </NavLink>
                  </li>
                  <li className = "nav-item- m-1">
                    <NavLink className = "nav-btn" to = "/cart">
                      Giỏ hàng
                    </NavLink>
                  </li>
                  <li className = "nav-item- m-1">
                    <NavLink className = "nav-btn" to = "/reservation">
                      Đặt bàn
                    </NavLink>
                  </li>
                  </ul>

                  <MDBNavbarNav right>
                  <a className="nav-btn" href="/manage/login">
                    Đăng nhập
                  </a>
                  </MDBNavbarNav>
            </MDBNavbar>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
              <Switch>
                <Route path = "/foods" component = {Foods}/>
                <Route path = "/drinks" component = {Drinks}/>
                <Route path = "/cart" component = {Cart}/>
                <Route path="/reservation" component={ReserveRoute} />
                <Redirect from="/" to="/foods" />
              </Switch>
              <hr/>
              <Footer/>
            </div>
          </body>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Customer;
