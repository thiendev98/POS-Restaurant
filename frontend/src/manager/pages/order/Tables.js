import { useState, useEffect } from "react";
import React from 'react';
import axios from 'axios';

import OrderInfo from "./OrderInfo";

const Tables = ({ begin, end }) => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [info, setInfo] = useState([]);
  const [flist, setFlist] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const showInfo = (row) => {
    axios
      .get(`/api/order/${row}`)
      .then((res) => setInfo(res.data));
    
    axios
      .get(`/api/food_order/${row}`)
      .then((res) => setFlist(res.data));
    
    handleShow();
  }

  useEffect(() => {
    axios
      .get(`/api/order?begin=${begin}&end=${end}`)
      .then((res) => setData(res.data));
  }, [begin, end])

  return (
    <>
      {data.map(row =>
        <tr>
          <td>{row.id}</td>
          <td>{String(row.total).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' VND'}</td>
          <td>{new Date(row.time).toLocaleString()}</td>
          {row.status === 'D' ? <td>Đang giao</td> : row.status === 'F' ? <td>Hoàn thành</td> : <td>Hủy đơn</td>}
          <td>
            <button type="button" className="btn btn-link" onClick={() => showInfo(row.id)}>Xem đơn hàng</button>
          </td>
        </tr>)}
      <OrderInfo data={info} flist={flist} show={show} handleClose={handleClose} />
    </>
  )
}

export default Tables