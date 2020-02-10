import React, { useState, useRef, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
// import addHistogramModule from 'highcharts/modules/histogram-bellcurve';
// import {
//     HighchartsChart, Chart, withHighcharts, XAxis, YAxis, Title, Subtitle, Legend, ScatterSeries, Series
//   } from 'react-jsx-highcharts';
// import bellcurve from 'highcharts/modules/histogram-bellcurve';

// require('highcharts/modules/histogram-bellcurve')(Highcharts);



function ToiChart(props) {

    // const data = [1, 2];

    // const [toiValue, setToiValue] = useState(3);
    
    // const incre = () => {
    //     toiValue < 6 ? setToiValue(toiValue + .25) : setToiValue(1);
    // }

    const shiftedScore = (score) => {
        // const shifted = score/4;
        const shifted = Math.floor(score/4);
        return (shifted == 6 ? 5.9 : shifted);
    }


    const options = {

        title: {
            text: ''
        },
        tooltip: {
            enabled: false,
        },
        legend: {
            enabled: false,
        },
        chart: {
            type: 'column',
            height: 325,
            plotBackgroundColor: '#F8F9FA',
            backgroundColor: '#F8F9FA',
            pointWidth: 200,
            marginBottom: 100,
            // paddingBottom: 50,
            // width: 200,

        },

        xAxis: [{
            type: 'category',
            categories: ['Strong Fixed', 'Leaning Fixed', 'Mixed', 'Leaning Growth', 'Strong Growth'],
            labels: {
                style: {
                    fontSize: '14px'
                },
                // step: 2,
            }
        }],
        yAxis: [{
            min: 0,
            title: {
                text: 'Your TOI'
            },
            visible: false,
        }],
        series: [{
            name: 'TOI Score',
            data: [
            ['a', 4],
            ['b', 8],
            ['c', 13],
            ['d', 8],
            ['e', 4],

            ],
            // pointWidth: 50,
            // color: '#FFE3A3',
            zoneAxis: 'x',
            zones: [{
                value: shiftedScore(props.score) - 1.9,
                color: '#FFE3A3'
            },{
                value: shiftedScore(props.score) - .5,
                color: '#6CDAC4'
            },{
                color: '#FFE3A3'
            }]
            // visible: false,
        }],

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    plotOptions: {
                        column: {
                            pointWidth: 30,
                            stacking: 'normal'
                        }
                    },
                    xAxis: {
                        labels: {
                            rotation: -90,
                            // step: 2,

                        },
                        
                    }
                },
                
            }]
        }
      }

      

    return (
        <div>
            <HighchartsReact
            highcharts={Highcharts}
            options={options}
        />
        {/* <button onClick={incre}>click</button> */}
        {/* <p>{shiftedScore(toiValue)}</p> */}

        {/* <p>{shiftedScore(props.score)}</p> */}
        {/* <p>{props.score/4}</p> */}

        </div>

    );
}

export default ToiChart;