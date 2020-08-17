import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class UnsubService {
    buttonSubject: Subject<any> = new Subject();
    buttonObservable = this.buttonSubject.asObservable();
}
