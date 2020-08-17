import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-normal',
  templateUrl: './normal.component.html',
  styleUrls: ['./normal.component.scss']
})
export class NormalComponent implements OnInit {

  public input = 'string';
  public weight = ['1 kg', '2 kg', 'Lang'];

  constructor() { }

  ngOnInit(): void {
  }

  onClear(): void {
    this.input = '';
  }

  addWeight(e: string): void {
    this.weight.push(e);
    console.log(this.weight);
  }

}
