import React, { useState } from 'react';
import Axios from 'axios';

const ReserveForm = () => {
  const url = "http://localhost:8000/api/reservation"
  const [data,setData] = useState({
    rtime: "",
    no_customer: "",
    interval: "",
    staff_name_id: "",
    table_id: "",
    name: ""
  })

  function handle(e){
    const newdata={...data}
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
  }

  function submit(e){
    Axios.post(url,{
      rtime: data.rtime,
      no_customer: data.no_customer,
      interval: data.interval,
      staff_name_id: data.staff_name_id,
      table_id: data.table_id,
      name: data.name
    })
    .then(res=>{
      console.log(res.data)
    })
    alert("Đặt bàn thành công!")
  }

  return (
    <section className="features-boxed1">
    <h1 className="m-5">Thêm mới đặt bàn</h1>
    <form>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="row m-2">
              <div className="col-3">
                <p className="fw-bold">Khách hàng</p>
              </div>
              <div className="col-9">
                <input onChange={(e)=>handle(e)} id = "name" value={data.name} type="text" className="form-control" />
              </div>
            </div>
            <div className="row m-2">
              <div className="col-3">
                <p className="fw-bold">Giờ đến</p>
              </div>
              <div className="col-9">
                <input onChange={(e)=>handle(e)} id = "rtime" value={data.rtime} type="datetime-local" className="form-control" />
              </div>
            </div>
            <div className="row m-2">
              <div className="col-3">
                <p className="fw-bold">Thời lượng</p>
              </div>
              <div className="col-9">
                <div className="row">
                  <div className="col-1">
                    <p className="text-muted text-end">Giờ</p>
                  </div>
                  <div className="col-3">
                    <input onChange={(e)=>handle(e)} id = "interval" value={data.interval} type="number" className="form-control" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="row m-2">
              <div className="col-3">
                <p className="fw-bold">NV nhận đặt</p>
              </div>
              <div className="col-9">
                <input onChange={(e)=>handle(e)} id = "staff_name_id" value={data.staff_name_id} type="text" className="form-control" />
              </div>
            </div>
            <div className="row m-2">
              <div className="col-3">
                <p className="fw-bold">Bàn</p>
              </div>
              <div className="col-9">
                <input onChange={(e)=>handle(e)} id = "table_id" value={data.table_id} type="text" className="form-control" />
                <a href="#" className="float-end">Xem bàn trống</a>
              </div>
            </div>
            <div className="row m-2">
              <div className="col-3">
                <p className="fw-bold">Số khách</p>
              </div>
              <div className="col-9">
                <div className="row">
                  
                  <div className="col-3">
                    <input onChange={(e)=>handle(e)} id = "no_customer" value={data.no_customer} type="number" className="form-control" /> 
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="m-2 text-end">
          <a type="button" className="btn btn-primary m-1" onClick={(e)=>submit(e)} href="/foods">Lưu</a>
          <a href="/reservation">
            <button type="button" className="btn btn-secondary m-1">Hủy</button>
          </a>
        </div>
      </div>
    </form>
    </section>
  )
}

export default ReserveForm