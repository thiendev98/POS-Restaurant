import Paper from '@material-ui/core/Paper';
import React from 'react';
import { useState, useEffect } from "react";
import axios from 'axios';

import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
  Tooltip
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import { EventTracker } from "@devexpress/dx-react-chart";

const Graph = () => {
  const [objdata, setObjdata] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/graph`)
      .then((res) => {
        const d = new Date();
        d.setDate(d.getDate() - 7);
        let temp = [];
        
        for (; d <= new Date(); d.setDate(d.getDate() + 1)) {
          let n = 0;
          res.data.map(row => {
            if (row['time__date'] === d.toISOString().split('T')[0]) n = row['count'];
          })
          temp.push({ date: d.getDate() + '/' + (d.getMonth() + 1), NumOfOrder: n });
        }
    
        setObjdata(temp);
      });
  }, [])

  return (
    <div className="m-5">
      <Paper>
        <Chart
          data={objdata}
        >
          <ArgumentAxis />
          <ValueAxis max={7} />

          <BarSeries
            valueField="NumOfOrder"
            argumentField="date"
          />
          <Title text="Số đơn hàng 7 ngày gần đây" />
          <Animation />
          <EventTracker />
          <Tooltip/>
        </Chart>
      </Paper>
    </div>
  )
}

export default Graph