import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-binding-io',
  templateUrl: './binding-io.component.html',
  styleUrls: ['./binding-io.component.scss']
})
export class BindingIOComponent implements OnInit {

  @Input() message: string;
  @Output() newEventEmit = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  getItem(item: string): void {
    this.newEventEmit.emit(item);
  }

}
