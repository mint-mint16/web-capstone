import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { BlockCopyPasteDirective } from './block-copy-paste.directive';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from "./app-routing.module";
import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';
import { PdfComponent } from './pdf/pdf.component';


@NgModule({
  declarations: [
    AppComponent,
    BlockCopyPasteDirective,
    MyBarChartComponent,
    PdfComponent
  ],
  imports: [
    BrowserModule,
    PdfViewerModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
