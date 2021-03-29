import React, { Component } from 'react';
import ApexCharts from 'react-apexcharts';
import styles from './stats.module.css';

class Stats extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: 'Study Duration',
          data: [0, 1.5, 2.5, 1, 4, 3, 2],
        },
      ],
      options: {
        chart: {
          height: 280,
          type: 'line',
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'smooth',
        },
        markers: {
          size: 4,
        },
        title: {
          text: 'Learning Hours',
          fontWeight: '400',
          fontSize: '16px',
          align: 'left',
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'],
            opacity: 0.1,
          },
        },
        xaxis: {
          categories: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
        },
      },
    };
  }

  render() {
    return (
      <div className={styles.stats}>
        <h1 className={styles.headerOne}>Your Statistics</h1>
        <div id="chart">
          <ApexCharts
            options={this.state.options}
            series={this.state.series}
            type="line"
            height={280}
          />
        </div>
      </div>
    );
  }
}

export default Stats;
