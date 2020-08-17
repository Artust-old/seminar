import { Component } from '@angular/core';
import { UnsubService } from 'src/app/common/services/unsub.service';

@Component({
    selector: 'app-b-component',
    template: '<button (click)="handleButtonClick($event)">Reload</button>'
})
export class BComponent {
    constructor(private unsubService: UnsubService) { }

    handleButtonClick(e) {
        this.unsubService.buttonSubject.next(e);
    }
}
