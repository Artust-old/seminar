import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-binding',
  templateUrl: './list-binding.component.html',
  styleUrls: ['./list-binding.component.scss']
})
export class ListBindingComponent implements OnInit {

  @Input() list: string[];

  constructor() { }

  ngOnInit(): void {
  }

  del(item): void {
    this.list.splice(this.list.findIndex(e => e === item), 1);
  }

}
