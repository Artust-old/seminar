import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'seminar';
  date: Date;
  constructor() {
    this.date = new Date();
    this.updateTimes();
  }

  updateTimes(): void {
    setInterval(() => this.date = new Date(), 1000);
  }
}
