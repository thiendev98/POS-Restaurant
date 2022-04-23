import Tables from "./Tables"
import { Table } from "react-bootstrap"
import React from 'react';

const ManageTable = () => {
  return (
    <>
      <h1 className="fw-bold p-3">Danh sách đặt bàn</h1>
      <div className="p-5 text-center">
        <div className="float-right m-3">
          Từ <input type="date" style={{margin: "0 10px"}}></input>
          đến <input type="date" style={{margin: "0 10px"}}></input>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Mã đặt bàn</th>
              <th>Bàn số</th>
              <th>Tên khách hàng</th>
              <th>Thời gian đặt</th>
              <th>Thời lượng</th>
              <th>Số người</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <Tables />
          </tbody>
        </Table>
      </div>
    </>
  )
}

export default ManageTable