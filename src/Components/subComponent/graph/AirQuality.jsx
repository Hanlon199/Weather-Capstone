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

class AirQuality extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        yaxis: [
            {
              title: {
                text: "Series A"
              },
            }
          ],
      },
      series: [{
        data: [{
          x: 'TEAM A',
          y: [65, 96]
        },
        {
          x: 'TEAM B',
          y: [55, 78]
        },
        {
          x: 'TEAM C',
          y: [95, 186]
        }]
      }]
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
              type="rangeBar"
              width="500"
            />
          </div>
        </div>
      </Body>
    );
  }
}

export default AirQuality;