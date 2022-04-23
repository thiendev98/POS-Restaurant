import Summary from "./Summary"
import Graph from "./Graph"
import React from 'react';

const Dashboard = () => {
  return (
    <>
      <h1 className="fw-bold p-3">Dashboard</h1>
      <Summary />
      <Graph />
    </>
  )
}

export default Dashboard