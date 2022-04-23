import Select from "react-select"
import Graph from "./Graph"
import React, { useState } from 'react';

const Month = [
  { value: 'Select', label: 'Select' }
]

const Year = []

for (let i = 1; i <= 12; i++) {
  Month.push({value: i, label: i})
}

for (let i = 2015; i <= new Date().getFullYear(); i++) {
  Year.push({value: i, label: i})
}

const Analytic = () => {
  const [month, setMonth] = useState(new Date().getMonth() + 1)
  const [year, setYear] = useState(new Date().getFullYear())
  return (
    <>
      <h1 className="fw-bold p-3">Thống kê</h1>
      <div className="p-5">
        Tháng <Select options={Month} defaultValue={{ value: month, label: month }}
          onChange={(e) => setMonth(e.value)} className="d-inline-block m-2" />
        Năm <Select options={Year} defaultValue={{ value: year, label: year }}
          onChange={(e) => setYear(e.value)} className="d-inline-block" />
        <Graph month={month} year={year}/>
      </div>
    </>
  )
}

export default Analytic