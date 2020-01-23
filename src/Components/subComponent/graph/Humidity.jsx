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

class Humidity extends Component {
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
            },
            {
              opposite: true,
              title: {
                text: "Series B"
              }
            }
          ],
      },
      series: [
        {
          data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
        },
        {
          data: [20, 29, 37, 36, 44, 45, 50, 58]
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
              type="bar"
              width="500"
            />
          </div>
        </div>
      </Body>
    );
  }
}

export default Humidity;