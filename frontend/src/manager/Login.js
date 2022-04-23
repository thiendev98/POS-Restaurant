import Restaurant from "./Restaurant.jpg"
import React from 'react';
import { useState } from "react";
import axios from 'axios';

const Login = (props) => {
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const [err, setErr] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`/auth`, { 
      username: name,
      password: pass,
     })
    .then(res => {
      res.data === 'Failed' ? setErr(true) : props.signin();
    });
  }

  return (
    <div className="w-100" style={{ height: "100vh", backgroundImage: `url(${Restaurant})`}}>
      <form>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card shadow-2-strong" style={{ borderRadius: "1rem"}}>
                <div className="card-body p-5 text-center">

                  <h3 className="mb-5">Đăng nhập</h3>
                  <p className="text-danger left"> {err ? "Tên đăng nhập hoặc mật khấu không đúng" : ""} </p>

                  <div className="form-outline mb-4 text-left">
                    <label className="form-label" for="typeEmailX-2">Tên đăng nhập</label>
                    <input type="text" id="typeEmailX-2" className="form-control form-control-lg" onChange={(e) => setName(e.target.value)} />
                  </div>

                  <div className="form-outline mb-4 text-left">
                    <label className="form-label" for="typePasswordX-2">Mật khẩu</label>
                    <input type="password" id="typePasswordX-2" className="form-control form-control-lg" onChange={(e) => setPass(e.target.value)} />
                  </div>

                  <div className="form-check d-flex justify-content-start mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="form1Example3"
                    />
                    <label className="form-check-label m-0" for="form1Example3"> Nhớ mật khẩu </label>
                  </div>       
                  <button className="btn btn-primary btn-lg btn-block" type="submit" onClick={(e) => handleSubmit(e)}>Đăng nhập</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Login