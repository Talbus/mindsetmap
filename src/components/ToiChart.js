import React, { useState, useRef, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
// import addHistogramModule from 'highcharts/modules/histogram-bellcurve';
// import {
//     HighchartsChart, Chart, withHighcharts, XAxis, YAxis, Title, Subtitle, Legend, ScatterSeries, Series
//   } from 'react-jsx-highcharts';
import bellcurve from 'highcharts/modules/histogram-bellcurve';

require('highcharts/modules/histogram-bellcurve')(Highcharts);



function ToiChart(props) {

    const data = [1, 2];

    const options = {

        title: {
            text: 'Theory of Intelligence'
        },
        tooltip: {
            enabled: false,
        },
        legend: {
            enabled: false,
        },
        chart: {
            height: 250,
            plotBackgroundColor: '#F8F9FA',
            backgroundColor: '#F8F9FA',
        },

        xAxis: [{
            categories: ['null', 'null', 'Fixed', 'Mixed', 'Growth'],
            // tickInterval: 2,
            labels: {
                step: 1,
            },
            plotLines: [{
                color: '#6CDAC4',
                width: 20,
                value: props.score/4,
                zIndex: 5,
            }],
            // opposite: true,
        }],
        yAxis: [{
            visible: false,
        }],
        series: [{
            type: 'bellcurve',
            intervals: 3,
            pointsInInterval: 5,
            xAxis: 0,
            yAxis: 0,
            baseSeries: 1,
            pointStart: 0,
            color: '#FFE3A3',
            fillOpacity: 0.5,

        }, {
            data: [3.5, 3, 3.2, 3.1, 3.6, 3.9, 3.4, 3.4, 2.9, 3.1, 3.7, 3.4, 3, 3, 4,
                4.4, 3.9, 3.5, 3.8, 3.8, 3.4, 3.7, 3.6, 3.3, 3.4, 3, 3.4, 3.5, 3.4, 3.2,
                3.1, 3.4, 4.1, 4.2, 3.1, 3.2, 3.5, 3.6, 3, 3.4, 3.5, 2.3, 3.2, 3.5, 3.8, 3,
                3.8, 3.2, 3.7, 3.3, 3.2, 3.2, 3.1, 2.3, 2.8, 2.8, 3.3, 2.4, 2.9, 2.7, 2, 3,
                2.2, 2.9, 2.9, 3.1, 3, 2.7, 2.2, 2.5, 3.2, 2.8, 2.5, 2.8, 2.9, 3, 2.8, 3,
                2.9, 2.6, 2.4, 2.4, 2.7, 2.7, 3, 3.4, 3.1, 2.3, 3, 2.5, 2.6, 3, 2.6, 2.3,
                2.7, 3, 2.9, 2.9, 2.5, 2.8, 3.3, 2.7, 3, 2.9, 3, 3, 2.5, 2.9, 2.5, 3.6,
                3.2, 2.7, 3, 2.5, 2.8, 3.2, 3, 3.8, 2.6, 2.2, 3.2, 2.8, 2.8, 2.7, 3.3, 3.2,
                2.8, 3, 2.8, 3, 2.8, 3.8, 2.8, 2.8, 2.6, 3, 3.4, 3.1, 3, 3.1, 3.1, 3.1, 2.7,
                3.2, 3.3, 3, 2.5, 3, 3.4, 3],
            visible: false,
        }]

    //     title: {
    //       text: 'Bell curve'
    //     },
      
    //     xAxis: [{
    //       alignTicks: false
    //     }, {
    //     //   title: {
    //     //     text: 'Bell curve'
    //     //   },
    //     categories: ['Fixed', 'Mixed', 'Growth'],
    //     alignTicks: false,
    //     opposite: true,
    //     tickInterval: 1,
    //     plotLines: [{
    //         color: '#6CDAC4',
    //         width: 20,
    //         value: 3,
    //         zIndex: 5,
    //     }]
    //     }],
      
    //     yAxis: [{
    //     }, {
    //     //   title: { text: 'Bell curve' },
    //       opposite: true,
    //       visible: false,
    //     }],
      
    //     series: [{
    //       name: 'Bell curve',
    //       type: 'bellcurve',
    //       xAxis: 1,
    //       yAxis: 1,
    //       baseSeries: 1,
    //       zIndex: -1,
    //       pointStart: 1,
    //       color: '#FFE3A3',
    //       fillOpacity: 0.5,
    //     }, {
    //     //   name: 'Data',
    //       type: 'scatter',
    //       data: data,
    //       visible: false,
    //       accessibility: {
    //         exposeAsGroupOnly: true
    //       },
    //       marker: {
    //         enable: false
    //       },
    //       color: 'rgb(2, 3, 4, 0.0)'
    //     }]
      }

      

    return (
        <div>
            <HighchartsReact
            highcharts={Highcharts}
            options={options}
        />
        {/* <p>{props.score / 4}</p> */}
        </div>

    );
}

export default ToiChart;