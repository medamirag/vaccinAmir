import { Component, OnInit, ViewChild } from "@angular/core";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexPlotOptions,
  ApexLegend,
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexStroke,
  ApexFill
} from "ng-apexcharts";

export type ChartOptions = {
  chart: ApexChart;
  xaxis: ApexXAxis;
  series: ApexAxisChartSeries;
  dataLabels: ApexDataLabels;
  title: ApexTitleSubtitle;
  plotOptions: ApexPlotOptions;
  legend: ApexLegend;
  series2: ApexNonAxisChartSeries;
  responsive: ApexResponsive[];
  labels: any;
  stroke: ApexStroke;
  fill: ApexFill;
};

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.scss']
})
export class StatistiquesComponent implements OnInit {
  public chartOptions!: Partial<ChartOptions>|any
  public chartOptions2!: Partial<ChartOptions>|any;
  public chartOptions3!: Partial<ChartOptions>|any;

  constructor() {
    this.chartOptions={
      series: [
        {
          name: "My-series",
          data: [80, 41, 35, 51,10, 25, 69, 49, ]
        }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      title: {
        text: "Nombre de Vaccins par mois"
      },
      xaxis: {
        categories: ["Jan", "Feb",  "Mar",  "Apr",  "May",  "Jun",  "Jul",  "Aug", "Sep"]
      }
    };
    this.chartOptions2 = {
      series: [
        {
          data: [
            {
              x: "BCG",
              y: 218
            },
            {
              x: "VHB",
              y: 149
            },
            {
              x: "VPC1",
              y: 184
            },
            {
              x: "VPI",
              y: 55
            },
            {
              x: "VPC",
              y: 84
            },
            {
              x: "DTC",
              y: 31
            },
            {
              x: "Pentavalent",
              y: 70
            },
            {
              x: "Pentavalant2",
              y: 30
            },
            {
              x: "VPC2",
              y: 44
            },
            {
              x: "Pentavalent3",
              y: 68
            },
            {
              x: "DTC4",
              y: 28
            },
            {
              x: "DTC2",
              y: 19
            },
            {
              x: "DTC3",
              y: 29
            }
          ]
        }
      ],

      chart: {
        height: 350,
        type: "treemap"
      },
      title: {
        text: "Vaccination Treemap"
      }
    };
  
    this.chartOptions3 = {
      series2: [14, 23, 21, 17, 15, 10, 12,],
      labels:["2 Mois","3 Mois","4 Mois","6 Mois","11 Mois","12 Mois","18 Mois"],
      chart: {
        type: "polarArea"
      },
      stroke: {
        colors: ["#fff"]
      },
      fill: {
        opacity: 0.8
      },
    
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  
   }
   

  ngOnInit(): void {
    
  }
  public generateData(count:any, yrange:any) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = "w" + (i + 1).toString();
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push({
        x: x,
        y: y
      });
      i++;
    }
    return series;
  }

  
  }
