import { Container, Row, Col } from "react-bootstrap"
import React from 'react';
import { useState, useEffect } from "react";
import axios from 'axios';

const Summary = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get(`/api/summary`)
      .then((res) => setData(res.data));
  }, [])

  return (
    <Container>
      <Row>
        <Col>
          <Row className="bg-primary bg-gradient m-0">
            <Col xs={12}>
              <h3 className="p-2">Tổng đơn hàng</h3>
            </Col>
            <Col xs={12}>
              <h1 className="p-4 display-4 fw-bold text-center">{data.num_order} Đơn</h1>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row className="bg-primary bg-gradient m-0">
            <Col xs={12}>
              <h3 className="p-2">Tổng doanh thu</h3>
            </Col>
            <Col xs={12}>
              <h1 className="p-4 display-4 fw-bold text-center">{String(data.sum_total).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' VND'}</h1>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Summary