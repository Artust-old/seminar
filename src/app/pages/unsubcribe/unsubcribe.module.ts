import { CommonModule } from '@angular/common';
import { UnsubcribeComponent } from './unsubcribe.component';
import { NgModule } from '@angular/core';
import { AComponent } from './a.component';
import { BComponent } from './b.component';
import { Routes, RouterModule } from '@angular/router';
import { UnsubService } from 'src/app/common/services/unsub.service';

const routes: Routes = [
    {
        path: '',
        component: UnsubcribeComponent,
    }
];

@NgModule({
    declarations: [AComponent, BComponent, UnsubcribeComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    providers: [UnsubService],
    exports: [AComponent, BComponent, UnsubcribeComponent],
})

export class UnsubcribeModule { }
