import React from 'react';
import {Line} from 'react-chartjs-2';

const state = {
  labels: ['$0.34', '$1.35', '$2.36',
           '$3.38', '$4.39','$5.40',
           '$6.42','$7.43','$8.44',
           '$9.46','$10.47','$11.48',
           '$12.50','$13.51','$14.52'
           ,'$15.54','$16.55','$17.56',
           '$18.58','$19.59','$20.60',
           '$21.62','$22.63','$23.64',
           '$24.66','$25.67','$26.68',
           '$27.70','$28.71','$29.72','$30.74'],
  datasets: [
    {

      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderWidth: 3,
      pointRadius:0.1,
      data: [0, 500, 1080,
      1581, 1856,2000,
      2100,2200,2300,
      2400,2500,2600,
      2700,2800,2900,
      3100,3200,3400,
      3500,3600,3700,
      3800,3900,4000,
      4100,4200,4300,
      4400,4500,4600,
      4700,4800,4900,5000,]
    }
  ]
}

export default class Graph extends React.Component {
  render() {
    return (
      <div>
        <Line
          data={state}
          options={{
            legend:{
              display:false,
            },
            scales: {
              yAxes: [{
                scaleLabel: {
                display: true,
                labelString: 'Monthly Savings '
                },
                ticks: {
                    callback: function(value, index, values) {
                        return '$' + value;
                    },
                    responsice:false,

                }
              }],
              xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Hourly Commitment'
                }
              }],
            }
          }}
        />
      </div>
    );
  }
}
