import { Component, Input } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.css']
})
export class DonaComponent {
  
  @Input() title: string ='Sin Título';
 // Doughnut
 @Input('labels') doughnutChartLabels: Label[] = [
  'Download Sales',
  'In-Store Sales',
  'Mail-Order Sales',
];
@Input('data') doughnutChartData: MultiDataSet =[
  [350,450,100],
]

}
