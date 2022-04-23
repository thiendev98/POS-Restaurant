import Tables from "./Tables"
import { Table } from "react-bootstrap"
import React from 'react';

const EManager = () => {
  return (
    <>
      <h1 className="fw-bold p-3">Quản lý nhân viên</h1>
      <div className="p-5 text-center">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Mã nhân viên</th>
              <th>Avatar</th>
              <th>Họ và Tên</th>
              <th>Email</th>
              <th>Chức vụ</th>
            </tr>
          </thead>
          <tbody>
            <Tables begin={0}/>
          </tbody>
        </Table>
      </div>
    </>
  )
}

export default EManager