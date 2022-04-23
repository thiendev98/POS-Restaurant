import React from 'react';
import { useState, useEffect } from "react";
import axios from 'axios';

const Tables = ({begin}) => {
  const [data, setData] = useState([]);
  const [res, setRes] = useState(true);
  const url = "http://localhost:8000/api/reservation";



  function handleDelete(e){
    axios.delete(url+'/'+e.id).then(
      setRes(!res)
    );
  }

  useEffect(() => {
    axios
      .get(`/api/reservation?begin=${begin}`)
      .then((res) => setData(res.data));
  }, [begin,res])
  return (
    <>
      {data.map(row =>
        <tr>
          <td key={row.id}>{row.id}</td>
          <td>{row.table_id}</td>
          <td>{row.name}</td>
          <td>{new Date(row.rtime).toLocaleString()}</td>
          <td>{row.interval}</td>
          <td>{row.no_customer}</td>
          <td><button type="button" className="btn btn-danger btn-sm m-1" onClick={() => handleDelete(row)}>Xóa</button></td>
        </tr>)}
    </>
  )
}

export default Tables