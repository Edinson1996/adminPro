import { Component} from '@angular/core';



@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrls: ['./grafica1.component.css']
})

export class Grafica1Component  {
  
  title : string ='Ventas';

  public labels1: string[] = ['Download Sales','In-Store Sales','Mail-Order Sales'];
  public data1 =[ [350,450,100] ];

  public labels2: string[] = ['label1','label2','label3'];
  public data2 =[ [350,450,100] ];
}
