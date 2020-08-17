import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountService {

  private counter = 0;
  constructor() {
    this.counter++;
    console.log(this.counter);
  }
}
