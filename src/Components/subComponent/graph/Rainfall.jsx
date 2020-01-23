import React, { Component } from "react";
import Chart from "react-apexcharts";
import styled from 'styled-components';

const Body = styled.div`
width: 100%;
height: 100%;
background-color: #dbdbdb;
margin-top: 10px;
margin-bottom: 10px;
border-radius: 5px;
`;

class Rainfall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    };
  }

  render() {
    return (
      <Body className="app">
        <div className="row">
          <div className="mixed-chart" style={{margin: "auto"}}>
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="line"
              width="500"
            />
          </div>
        </div>
      </Body>
    );
  }
}

export default Rainfall;