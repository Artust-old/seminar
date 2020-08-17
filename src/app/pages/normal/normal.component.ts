import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-normal',
  templateUrl: './normal.component.html',
  styleUrls: ['./normal.component.scss']
})
export class NormalComponent implements OnInit {

  public input = 'string';

  constructor() { }

  ngOnInit(): void {
  }

  onClear(): void {
    this.input = '';
  }

}
