import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';
import { PdfComponent } from "./pdf/pdf.component";
const routes: Routes = [
  {path: 'bar-chart', component: MyBarChartComponent},
  {path: '**', component: PdfComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
