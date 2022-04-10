import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { FonctionService } from 'src/app/service/fonction.service';

@Component({
  selector: 'app-benef',
  templateUrl: './benef.component.html',
  styleUrls: ['./benef.component.css']
})
export class BenefComponent implements OnInit {
  idresto = "624ee478720708c9e53a2605";
  daty1 = "01/01/2022";
  daty2 = "12/12/2022";
  labelBoard : any =  [];
  boardDataset : any =  [
    { data: [], label: 'Chiffre d`affaire' },
    { data: [], label: 'Revient' },
    { data: [], label: 'Bénéfice' }
  ];
  constructor(private fonction:FonctionService) { }

  ngOnInit(): void {
    this.getBenef();
  }
  
  getBenef(){
    let result = this.fonction.benefResto(this.idresto, this.daty1, this.daty2);
    result.subscribe((response:any)=>{
      if(response.status!=200){
        alert(response.data);
      }else{
        for(let item of response.data){
          this.labelBoard.push(item._id);
          this.boardDataset[0].data.push(item.ca);
          this.boardDataset[1].data.push(item.revient);
          this.boardDataset[2].data.push(item.ca - item.revient);
        }
        this.chart?.update();
      }
    });
  }
  //CHART

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    DataLabelsPlugin
  ];

  public barChartData: ChartData<'bar'> = {
    labels: this.labelBoard,
    datasets: this.boardDataset
  };

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    //console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    //console.log(event, active);
  }
//END CHART

}
