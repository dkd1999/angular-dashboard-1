import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {
  Highcharts = Highcharts
  chartOptions = {}

  constructor(){
    this.chartOptions = {
      // give chart configuration data from highcharts

      chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45,
            beta: 0
        }
    },
    title: {
        text: 'Average student admission 2022',
        align: 'left'
    },
    subtitle: {
        text:"DKD",
        align: 'left'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            depth: 35,
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }
    },
    credits:{
      enabled:false
    },
    series: [{
        type: 'pie',
        name: 'Count',
        data: [
            ['MEA(R)N', 23],
            ['PYTHON', 18],
            {
                name: 'A.I',
                y: 12,
                sliced: true,
                selected: true
            },
            ['ASP.NET', 9],
            ['TESTING', 8],
            ['FLUTTER', 30]
        ]
    }]
    }
  }
}
