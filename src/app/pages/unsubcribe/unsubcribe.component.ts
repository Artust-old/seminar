import { Component } from '@angular/core';

@Component({
    selector: 'app-unsubcribe',
    template: `<div class="content">
    <button (click)="showA = !showA">Toggle</button>
  <p>{{showA ? 'component A is display' : 'component A is hidden'}}</p>
  <app-b-component></app-b-component>
  <app-a-component *ngIf="showA"></app-a-component>
  </div>`,
    styles: [`.content {margin: 24px;}`],
})
export class UnsubcribeComponent {
    showA = true;
}
