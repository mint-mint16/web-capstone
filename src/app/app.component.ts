import { Component } from '@angular/core';
import * as readingTime from 'reading-time'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// export class Pixel {
//   public x: number;
//   public y: number;   
//   constructor(x: number, y: number) {
//       this.x = x;
//       this.y = y;
//   }
// }

export class AppComponent {
  page: number = 1;
  totalPages: number;
  isLoaded: boolean = false;
  renderText: boolean = true;
  count: number = 0;
  text: number = 0;
  pageValue: Array<string> = [];
  totalSeconds: number = 0;
  title;
  timeLeft: number = 0;
  interval;

  startTimer() {
    this.interval = setInterval(() => {
      this.timeLeft++;
    }, 1)
  }


  afterLoadComplete(pdfData: any) {
    this.totalPages = pdfData.numPages;
    this.isLoaded = true;
    this.renderText;
    this.startTimer();
  }

  textLayerRendered(pdfDataPage: any) {
    this.pageValue.push(pdfDataPage.source.textContentItemsStr.join());
    this.renderText;
    this.text++;

    if (this.text == 1) {
      let stats = readingTime(this.pageValue[this.page - 1], {
        wordsPerMinute: 700
      });
      // console.log(stats.time);
    }
  }

  resetTime() {
    this.timeLeft = 0;
    this.startTimer();
  }

  nextPage() {
    this.page++;
    let stats = readingTime(this.pageValue[this.page - 2], {
      wordsPerMinute: 700
    });

    let checkTime = stats.time - this.timeLeft
    // console.log(`${stats.time} and ${this.timeLeft}`);
    if (checkTime < 5000) {
      console.log("You have read all");
    } else {
      console.log("You are cheater");
    }
    this.resetTime();
    // console.log(`${stats.time} and ${this.timeLeft}`);
  }

  prevPage() {
    // if (this.page === this.totalPages) {
    let stats = readingTime(this.pageValue[this.page - 1], {
      wordsPerMinute: 700
    });
    let checkTime = stats.time - this.timeLeft
    if (checkTime < 10000) {
      console.log("You have read all");
    } else {
      console.log("You are cheater");
    }
    // }
    this.page--;
    this.resetTime();
  }
}