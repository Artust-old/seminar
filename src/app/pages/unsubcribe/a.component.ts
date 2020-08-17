import { Subject, SubscriptionLike, ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { UnsubService } from 'src/app/common/services/unsub.service';

@Component({
    selector: 'app-a-component',
    template: `<h1>GET and show data!</h1>`
})
export class AComponent implements OnInit, OnDestroy {

    subcription: SubscriptionLike;
    unsubcription: ReplaySubject<any> = new ReplaySubject<any>();

    constructor(private unsubService: UnsubService) {
    }

    ngOnInit() {
        // this.subcription = this.unsubService.buttonObservable.subscribe(e => {
        //     console.log('GET api');
        // });
        this.unsubService.buttonObservable.pipe(takeUntil(this.unsubcription)).subscribe(e => {
            console.log('GET api');
        });
    }

    ngOnDestroy(): void {
        // this.subcription.unsubscribe();
        // this.unsubcription.next(null);
    }
}
