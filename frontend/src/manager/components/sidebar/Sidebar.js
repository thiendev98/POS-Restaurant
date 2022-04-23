import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sticky-top" style={{height: '100vh', overflow: 'scroll initial'}}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: 'inherit' }}
          >
            Restaurant
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink to="/manage/dashboard" activeStyle={{ fontWeight: "bold", color: "red" }}>
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/manage/menu" activeStyle={{fontWeight: "bold", color: "red"}}>
              <CDBSidebarMenuItem icon="book">Quản lý thực đơn</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/manage/table" activeStyle={{fontWeight: "bold", color: "red"}}>
              <CDBSidebarMenuItem icon="table">Quản lý đặt bàn</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/manage/order" activeStyle={{fontWeight: "bold", color: "red"}}>
              <CDBSidebarMenuItem icon="list">Đơn hàng</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/manage/employee" activeStyle={{fontWeight: "bold", color: "red"}}>
              <CDBSidebarMenuItem icon="user">Quản lý nhân viên</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/manage/analytic" activeStyle={{fontWeight: "bold", color: "red"}}>
              <CDBSidebarMenuItem icon="chart-line">Thống kê</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: '20px 5px',
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  )
}
  
  export default Sidebar