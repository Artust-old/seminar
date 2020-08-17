import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutletNestedComponent } from './outlet-nested.component';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { TableComponent } from './table/table.component';
import { EventComponent } from './event/event.component';

const routes: Routes = [
  {
    path: '',
    component: OutletNestedComponent,
    children: [
      {
        path: '',
        redirectTo: 'table',
        pathMatch: 'full',
      },
      {
        path: 'table',
        component: TableComponent,
      },
      {
        path: 'event',
        component: EventComponent,
      },
    ]
  },
];

@NgModule({
  declarations: [OutletNestedComponent, TableComponent, EventComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,

    MatIconModule,
    MatInputModule,
    MatDividerModule,
    MatCheckboxModule,

    FlexLayoutModule,
  ],
  exports: [OutletNestedComponent],
})
export class OutletNestedModule { }
