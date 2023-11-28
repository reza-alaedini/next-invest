import React, { Component } from "react";
import Chart from "react-apexcharts";

class Charts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chart: {
        width: "100%",
      },
      options: {
        colors: ["#7B61FF"],
        markers: false,
        stroke: {
          curve: "smooth",
        },
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: [2015, 2016, 2017, 2018, 2019, 2020],
        },
      },
      series: [
        {
          name: "Q2",
          data: [
            2.1, 1.7, 2.5, 2, 3.8, 3.2, 2.9, 3.8, 3.5, 3.9, 4.2, 4.6, 5.5, 6,
            6.5, 7,
          ],
        },
      ],
      // responsive: [
      //   {
      //     breakpoint: 530,

      //     chart: {
      //       width: "100px",
      //     },
      //   },
      // ],
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="area"
              // width="500"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Charts;
