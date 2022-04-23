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
import { makeStyles } from "@material-ui/styles";
import { Animation } from '@devexpress/dx-react-chart';
import { EventTracker } from "@devexpress/dx-react-chart";

const useStyles = makeStyles({
  root: {
    "& div": {
      zIndex: "0"
    }
  }
});

const Graph = ({month, year}) => {
  const [objdata, setObjdata] = useState([]);
  useEffect(() => {
    month === "Select" ?
      axios
        .get(`/api/graph?year=${year}`)
        .then((res) => {
          const d = new Date();
          d.setMonth(0);
          let temp = [];

          for (; d <= new Date().setMonth(11); d.setMonth(d.getMonth() + 1)) {
            let n = 0, t = 0;
            res.data.map(row => {
              if (row['time__month'] === d.getMonth() + 1) {
                n = row['count'];
                t = row['sum'];
              }
            })
            temp.push({ month: String(d.getMonth() + 1), NumOfOrder: n, Total: t});
          }
          setObjdata(temp);
        })
      :
        axios
          .get(`/api/graph?year=${year}&month=${month}`)
          .then((res) => {
            
            const d = new Date();
            d.setFullYear(year);
            d.setMonth(month - 1);
            d.setDate(1);
          
            const dk = new Date();
            dk.setFullYear(year);
            dk.setMonth(month);
            dk.setDate(0);

            let temp = [];

            for (; d <= dk; d.setDate(d.getDate() + 1)) {
              let n = 0, t = 0;
              res.data.map(row => {
                if (row['time__date'] === d.toISOString().split('T')[0]) {
                  n = row['count'];
                  t = row['sum'];
                }
              })
              temp.push({ date: String(d.getDate()), NumOfOrder: n, Total: t});
            }
            setObjdata(temp);
          })
      ;
  }, [month, year])

  const classes = useStyles();
  return (
    month === "Select" ?
      <>
        <div style={{padding: "20px 0"}}>
          <Paper className={classes.root}>
            <Chart
              data={objdata}
            >
              <ArgumentAxis />
              <ValueAxis max={12} />

              <BarSeries
                valueField="NumOfOrder"
                argumentField="month"
              />
              <Title text={'Số đơn hàng trong năm ' + year}/>
              <Animation />
              <EventTracker />
              <Tooltip/>
            </Chart>
          </Paper>
        </div>

        <div style={{padding: "20px 0"}}>
          <Paper>
            <Chart
              data={objdata}
            >
              <ArgumentAxis />
              <ValueAxis max={12} />

              <BarSeries
                valueField="Total"
                argumentField="month"
              />
              <Title text={"Doanh thu trong năm " + year}/>
              <Animation />
              <EventTracker />
              <Tooltip/>
            </Chart>
          </Paper>
        </div>
      </>
    :
      <>
        <div style={{padding: "20px 0"}}>
          <Paper className={classes.root}>
            <Chart
              data={objdata}
            >
              <ArgumentAxis />
              <ValueAxis max={31} />

              <BarSeries
                valueField="NumOfOrder"
                argumentField="date"
              />
              <Title text={"Số đơn hàng trong tháng " + month + ' năm ' + year} />
              <Animation />
              <EventTracker />
              <Tooltip/>
            </Chart>
          </Paper>
        </div>

        <div style={{padding: "20px 0"}}>
          <Paper>
            <Chart
              data={objdata}
            >
              <ArgumentAxis />
              <ValueAxis max={12} />

              <BarSeries
                valueField="Total"
                argumentField="date"
              />
              <Title text={"Doanh thu trong tháng " + month + ' năm ' + year} />
              <Animation />
              <EventTracker />
              <Tooltip/>
            </Chart>
          </Paper>
        </div>
      </>
  )
}

export default Graph