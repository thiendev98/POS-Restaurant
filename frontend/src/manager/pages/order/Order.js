import Tables from "./Tables"
import { Table } from "react-bootstrap"
import React from 'react';
import { useState } from "react";

const Order = () => {
  const [beginDay, setBeginDay] = useState("2000-01-01")
  const [endDay, setEndDay] = useState(new Date().toISOString().split('T')[0])

  return (
    <>
      <h1 className="fw-bold p-3">Danh sách đơn hàng</h1>
      <div className="p-5 text-center">
        <div className="float-right m-3">
          Từ <input type="date" style={{margin: "0 10px"}} onChange={(e) => setBeginDay(e.target.value)}></input>
          đến <input type="date" style={{margin: "0 10px"}} onChange={(e) => setEndDay(e.target.value)}></input>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Mã đơn hàng</th>
              <th>Số tiền</th>
              <th>Thời gian</th>
              <th>Trạng thái</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <Tables begin={beginDay} end={endDay}/>
          </tbody>
        </Table>
      </div>
    </>
  )
}

export default Order