import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-bar-chart',
  templateUrl: './my-bar-chart.component.html',
  styleUrls: ['./my-bar-chart.component.css']
})

export class MyBarChartComponent implements OnInit {
  constructor() { }
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['Minh', 'Ân', 'Khánh', 'Kỳ', 'Hưng'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    { data: [5, 10, 17, 2, 8, 100], label: 'The number of reading' },
  ];

  public lineChartLabels = ['Minh', 'Ân', 'Khánh', 'Kỳ', 'Hưng'];
  public lineChartData = [
    { data: [25, 49, 75, 60, 30, 0, 120], label: 'Reading time in minute',fill: false, backgroundColor: 'rgba(25, 181, 254, 1)', hoverBackgroundColor: 'rgba(34, 167, 240, 1)' },
  ];
  public lineChartType = 'bar';

  ngOnInit() {
  }
}
