import { useState, useEffect } from "react";
import axios from 'axios';

const OrderDetail = ({ foodId, quantity }) => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/food/${foodId}`)
      .then((res) => setInfo(res.data));
  }, [])

  return (
    <div className="col-6 p-2">
      <div className="row">
        <div className="col-4">
          <img src={"http://127.0.0.1:8000" + info.image} width={100} height={100} alt="food or drink"/>
        </div>
        <div className="col-8">
          <p className="fw-bold">{info.name}</p>
          <p>Số lượng: {quantity}</p>
        </div>
      </div>
    </div>
  )
}

export default OrderDetail;